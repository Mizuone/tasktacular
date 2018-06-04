import { TasktacularModule } from './tasktacularmodule.module';

describe('TasktacularmoduleModule', () => {
  let tasktacularmoduleModule: TasktacularModule;

  beforeEach(() => {
    tasktacularmoduleModule = new TasktacularModule();
  });

  it('should create an instance', () => {
    expect(tasktacularmoduleModule).toBeTruthy();
  });
});
