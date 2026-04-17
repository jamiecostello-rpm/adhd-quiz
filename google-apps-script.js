/**
 * ADHD Quiz -- Google Apps Script (Sheet-Bound Version)
 *
 * SETUP:
 * 1. Go to Google Sheets and create a new blank spreadsheet
 * 2. Name it "ADHD Quiz Leads"
 * 3. In Row 1, paste these headers across columns A to Q:
 *    Timestamp | First Name | Email | Phone | Top Pattern 1 | Top Pattern 2 | Top Pattern 3 | Emotional Regulation % | RSD % | Executive Function % | Time Management % | Goal Setting % | Diagnosis Status | Readiness | Weekly Time | Priority Change | Strengths
 * 4. Click Extensions > Apps Script
 * 5. Delete everything in Code.gs and paste THIS code
 * 6. Click Deploy > New deployment
 * 7. Click the gear icon next to "Select type" > choose "Web app"
 * 8. Execute as: "Me"
 * 9. Who has access: "Anyone"  (NOT "Anyone with Google Account" -- just "Anyone")
 * 10. Click Deploy, authorise when prompted
 * 11. Copy the Web App URL and give it to Jamie
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    sheet.appendRow([
      new Date().toISOString(),
      data.first_name || "",
      data.email || "",
      data.phone || "",
      data.top_pattern_1 || "",
      data.top_pattern_2 || "",
      data.top_pattern_3 || "",
      data.emotional_regulation_pct || 0,
      data.rsd_pct || 0,
      data.executive_function_pct || 0,
      data.time_management_pct || 0,
      data.goal_setting_pct || 0,
      data.diagnosis_status || "",
      data.readiness || "",
      data.weekly_time || "",
      data.priority_change || "",
      data.strengths || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
