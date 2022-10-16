import {DisplayProcessor, SpecReporter, StacktraceOption} from "jasmine-spec-reporter";
import { CustomReporterResult } from "jasmine-spec-reporter/built/spec-reporter";
import SuiteInfo = jasmine.SuiteInfo;

class CustomProcessor extends DisplayProcessor {
  public displaySuccessfulSpec(spec: CustomReporterResult, log: string): string {
    return `${log}`;
  }
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
        displayStacktrace: StacktraceOption.NONE
    },
    customProcessors: [CustomProcessor],
}));