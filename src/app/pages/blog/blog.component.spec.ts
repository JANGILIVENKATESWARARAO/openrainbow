import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogComponent } from './blog.component';
import { flushContent, loadSite, testProviders, testSite, testBlog } from '../../../testing/test-helpers';

describe('BlogComponent', () => {
  let fixture: ComponentFixture<BlogComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [BlogComponent], providers: testProviders }).compileComponents();
    await loadSite();

    fixture = TestBed.createComponent(BlogComponent);
    fixture.detectChanges();
    flushContent();
    await fixture.whenStable();
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('shows the page title from site.json', () => {
    expect(el.querySelector('h1')?.textContent).toContain(testSite.pages.blog.title);
  });

  it('lists every post', () => {
    expect(el.querySelectorAll('.post').length).toBe(testBlog.posts.length);
  });
});
