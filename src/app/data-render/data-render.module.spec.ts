import { DataRenderModule } from './data-render.module';

describe('DataRenderModule', () => {
  let dataRenderModule: DataRenderModule;

  beforeEach(() => {
    dataRenderModule = new DataRenderModule();
  });

  it('should create an instance', () => {
    expect(dataRenderModule).toBeTruthy();
  });
});
