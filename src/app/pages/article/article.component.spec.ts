import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleComponent } from './article.component';
import { flushContent, loadSite, testProviders, testBlog } from '../../../testing/test-helpers';

describe('ArticleComponent', () => {
  let fixture: ComponentFixture<ArticleComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ArticleComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(ArticleComponent);
    fixture.componentRef.setInput('post', testBlog.posts[0]);
    fixture.detectChanges();
    flushContent();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('shows the post title', () => {
    expect(el.querySelector('h1')?.textContent).toContain(testBlog.posts[0].title);
  });
});
