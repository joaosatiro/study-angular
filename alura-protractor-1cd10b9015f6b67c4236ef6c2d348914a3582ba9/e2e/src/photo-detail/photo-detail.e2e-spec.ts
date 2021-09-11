import { browser, logging } from 'protractor';
import { PhotoDetailPage } from './photo-detail.po';

describe('Home page', () => {
  let photoDetailPage: PhotoDetailPage = null;

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });

  beforeEach(async () => {
    photoDetailPage = new PhotoDetailPage();
    await photoDetailPage.navigateTo(14);
  });

  it('Should be on Photo detail page', async () => {
    const title = await photoDetailPage.getWindowTitle();
    expect(title).toEqual(PhotoDetailPage.PAGE_TITLE);
  });

  it('Should publish a commet', async () => {
    const initialCommentListSize = await photoDetailPage.getCommetListSize();
    await photoDetailPage.fillComment('Some commet');
    await photoDetailPage.publishComment();
    const currentCommetListSize = await photoDetailPage.getCommetListSize();
    expect(currentCommetListSize).toBeGreaterThan(initialCommentListSize);
  });
});
