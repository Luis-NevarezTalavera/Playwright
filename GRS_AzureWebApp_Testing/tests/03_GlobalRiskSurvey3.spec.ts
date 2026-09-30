import { test } from '@playwright/test';
import { GlobalRiskSurveyPage3 } from './page-objects/GlobalRiskSurvey3.pom';

test('Complete first survey question', async ({ page }) => {
  const globalRiskSurvey3 = new GlobalRiskSurveyPage3(page);

  await globalRiskSurvey3.goto('/survey');

  await globalRiskSurvey3.selectNo();
  await globalRiskSurvey3.validateIncidentQuestionAnswered();
  await globalRiskSurvey3.clickNext();
});