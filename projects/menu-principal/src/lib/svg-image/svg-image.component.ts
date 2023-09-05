import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Observable, map } from 'rxjs';
import { SvgImageService } from './svg-image.service';

@Component({
  selector: 'svg-image',
  templateUrl: './svg-image.component.html',
  styleUrls: ['./svg-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SvgImageComponent {
  @Input()
  @HostBinding('class')
    // Classes com tamanhos predefinidos
  size: 'small' | 'large' | 'default' = 'default';

  // Variável com a requisição do SVG que vai ser renderizado
  public svgContent: Observable<SafeHtml> | undefined;

  constructor(
    private sanitizer: DomSanitizer,
    private svgImageService: SvgImageService
  ) {}

  @Input()
  set src(value: string) {
    // Pegamos o caminho do SVG e invocamos o
    // nosso service que vai baixá-lo.
    this.setSvgContent(value);
  }

  private setSvgContent(src: string): void {
    // Baixamos o SVG do service e atribuímos
    // à nossa variável que é renderizada no template
    this.svgContent = this.svgImageService
      .getSvgContent(src)
      .pipe(map(
        content => this.sanitizer.bypassSecurityTrustHtml(content)
      ));
  }
}
