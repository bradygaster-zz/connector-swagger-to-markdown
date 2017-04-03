![Icon](icon.png)

# Smartsheet (Preview)

v1.0

Smartsheet is a powerful work management and collaboration tool that lets you easily track and manage your work so you  and your team can be more productive than ever.  Use it to collaborate with others, track progress on any project, automate processes, and better structure your work.


# Actions

## Get a list of sheets
Get a list of sheets

**Operation Id:** ListSheets

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Optional folder to look in for sheets (defaults to all) | string | Folder id for the folder containing the sheets | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [SmartsheetCollection[Sheet]](#smartsheetcollection[sheet]) | object | A common pattern for requesting collections from smartsheet |

___

## Get a sheet
Get a sheet

**Operation Id:** GetSheet

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Sheet Id | string | The sheet to get | true |
| Comma separated columns to return | string | The list of columns to return | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [SheetWithRows](#sheetwithrows) | object | A Smartsheet with rows |

___

## Get the columns of a sheet
Get the columns of a sheet

**Operation Id:** GetColumns

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Sheet Id | string | The sheet to get the columns for | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [SmartsheetCollection[Column]](#smartsheetcollection[column]) | object | A common pattern for requesting collections from smartsheet |

___

## Get the columns of a sheet in dynamic schema format
Get the columns of a sheet in dynamic schema format

**Operation Id:** GetColumnsSchema

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Sheet Id | string | The sheet to get the columns for | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | string |  |

___

## Insert row
Insert row

**Operation Id:** InsertRow

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Sheet Id | string | The sheet to insert into | true |
| The row to insert | dynamic | The row to insert | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [InsertRowResponse](#insertrowresponse) | object | Response to InsertRow operation |

___

## Get subfolders of a folder
Get subfolders of a folder

**Operation Id:** ListSubFolders

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Folder Id | string | The id of the parent folder | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [SmartsheetCollection[Folder]](#smartsheetcollection[folder]) | object | A common pattern for requesting collections from smartsheet |

___

## Get discussions for a sheet
Get discussions for a sheet

**Operation Id:** GetDiscussionsForSheet

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Sheet Id | string | Sheet | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [SmartsheetCollection[GetDiscussionResponse]](#smartsheetcollection[getdiscussionresponse]) | object | A common pattern for requesting collections from smartsheet |

___

## Add a discussion to a sheet
Add a discussion to a sheet

**Operation Id:** AddDiscussionToSheet

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Sheet Id | string | Sheet to add a discussion to | true |
| Title | string | Title for the discussion | false |
| Text | string | Text of the comment | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [DiscussionResponse](#discussionresponse) | object | Response object for Create Discussion |

___

## Add a discussion to a row
Add a discussion to a row

**Operation Id:** AddDiscussionToRow

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Sheet | string | Sheet | true |
| Row | string | Sheet | true |
| Title | string | Title for the discussion | false |
| Text | string | Text of the comment | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [DiscussionResponse](#discussionresponse) | object | Response object for Create Discussion |

___

## Add a comment to a discussion
Add a comment to a discussion

**Operation Id:** AddCommentToDiscussion

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Sheet Id | string | Sheet to add a comment to | true |
| Discussion | string | Discussion | true |
| Text | string | Text of the comment | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreateCommentResponse](#createcommentresponse) | object | Response object for Creating a Comment |

___

## Get a discussion
Get a discussion

**Operation Id:** GetDiscussion

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Sheet Id | string | Sheet to get the discussion from | true |
| Discussion Id | string | Discussion to get | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [DiscussionData](#discussiondata) | object | Data relevant to the discussion created |

___

# Triggers

## When a new sheet is created
When a new sheet is created

**Operation Id:** OnNewSheet

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Optional folder to look in for new sheets (defaults to all) | string | Folder id for the folder containing the sheets | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [SmartsheetCollection[Sheet]](#smartsheetcollection[sheet]) | object | A common pattern for requesting collections from smartsheet |

___

## When any sheet is updated
When any sheet is updated

**Operation Id:** OnUpdatedSheet

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Optional folder to look in for updated sheets (defaults to all) | string | Folder id for the folder containing the sheets | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [SmartsheetCollection[Sheet]](#smartsheetcollection[sheet]) | object | A common pattern for requesting collections from smartsheet |

___

## When a comment is added to a sheet
When a comment is added to a sheet

**Operation Id:** OnNewComment

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Sheet Id | string | The sheet to get | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [SmartsheetCollection[DiscussionComment]](#smartsheetcollection[discussioncomment]) | object | A common pattern for requesting collections from smartsheet |

___

## When a specific sheet is updated
When a specific sheet is updated

**Operation Id:** OnUpdatedSpecificSheet

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Sheet Id | string | The sheet to watch for updates | true |
| Comma separated columns to return | string | The list of columns to return | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [SmartsheetCollection[SheetWithRows]](#smartsheetcollection[sheetwithrows]) | object | A common pattern for requesting collections from smartsheet |

___

## When a new row is created
When a new row is created

**Operation Id:** OnRowCreated

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Sheet Id | string | The sheet to get the columns for | true |
| Comma separated columns to return | string | The list of columns to return | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [RowResponse](#rowresponse) | object | Response object for OnRowCreated |

___

## When a comment is added to a discussion
When a comment is added to a discussion

**Operation Id:** OnCommentAdded

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Sheet Id | string | Sheet to look for a discussion on | true |
| Discussion Id | string | Discussion to watch for comments | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CommentResponse](#commentresponse) | object | Response object for Comment |

___

## When a discussion is added to a sheet
When a discussion is added to a sheet

**Operation Id:** OnDiscussionCreated

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Sheet Id | string | Sheet | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [SmartsheetCollection[GetDiscussionResponse]](#smartsheetcollection[getdiscussionresponse]) | object | A common pattern for requesting collections from smartsheet |

___


## Objects

### SmartsheetCollection[Sheet]
A common pattern for requesting collections from smartsheet

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Data | Array of [Sheet](#sheet) | Collection of smartsheet models | data |

### Sheet
A Smartsheet sheet

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Access level | string | The access level of the sheet | accessLevel |
| Id | int32 | The unique identifier for the sheet | id |
| Name | string | The name of the sheet | name |
| Url | string | The url for the sheet | permalink |
| Created At | date-time | When the sheet was created | createdAt |
| Modified At | date-time | When the sheet was modified | modifiedAt |

### SmartsheetCollection[DiscussionComment]
A common pattern for requesting collections from smartsheet

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Data | Array of [DiscussionComment](#discussioncomment) | Collection of smartsheet models | data |

### DiscussionComment
A comment on a discussion

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Text of Comment | string | Text of this comment | text |
| Id of Comment | int32 | Id for this comment | id |
| [DiscussionCommentUser](#discussioncommentuser) | object | User who created a comment | createdBy |
| Time comment created | date-time | Date this comment was created | createdAt |
| Time comment modified | date-time | Date this comment was modified | modifiedAt |

### DiscussionCommentUser
User who created a comment

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Comment created by name | string | Name of the user who created a comment | name |
| Comment created by email | string | Email of the user who created a comment | email |

### SheetWithRows
A Smartsheet with rows

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Sheet HTML | string | An HTML table representation of the sheet | rowHTML |
| Access level | string | The access level of the sheet | accessLevel |
| Id | int32 | The unique identifier for the sheet | id |
| Name | string | The name of the sheet | name |
| Url | string | The url for the sheet | permalink |
| Created At | date-time | When the sheet was created | createdAt |
| Modified At | date-time | When the sheet was modified | modifiedAt |

### SmartsheetCollection[Column]
A common pattern for requesting collections from smartsheet

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Data | Array of [Column](#column) | Collection of smartsheet models | data |

### Column
A Smartsheet column

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Column Id | int64 | The unique id of the column | id |
| Column index | int32 | The ordinal position of the column | index |
| Title | string | The title of the column | title |
| Data type | string | Column data type | type |
| Is primary | boolean | Indicates whether the column is the primary column | primary |
| Width | int32 | The width in pixels of the column | width |

### InsertRowResponse
Response to InsertRow operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [InsertRowResponseResult](#insertrowresponseresult) | object | Result of inserted row | result |

### InsertRowResponseResult
Result of inserted row

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Sheet Id | int32 | The Id of the sheet that was modified | sheetId |
| Row number | int32 | The row number of the newly inserted row | rowNumber |
| Created at | date-time | When the sheet was created | createdAt |
| Modified at | date-time | When the sheet was modified | modifiedAt |

### SmartsheetCollection[SheetWithRows]
A common pattern for requesting collections from smartsheet

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Data | Array of [SheetWithRows](#sheetwithrows) | Collection of smartsheet models | data |

### BlobMetaData
Metadata for Smartsheet Blobs

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | The unique identifier for the file or folder | Id |

### SmartsheetCollection[Folder]
A common pattern for requesting collections from smartsheet

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Data | Array of [Folder](#folder) | Collection of smartsheet models | data |

### Folder
A Smartsheet folder

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | The unique id of the folder | id |
| Name | string | The name of the folder | name |
| Url | string | The url for the folder | permalink |

### Discussion
A Smartsheet discussion

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Title | string | Title for the discussion | title |
| [Comment](#comment) | object | A discussion comment | comment |

### Comment
A discussion comment

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Text | string | Text of the comment | text |

### DiscussionResponse
Response object for Create Discussion

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [DiscussionData](#discussiondata) | object | Data relevant to the discussion created | result |

### DiscussionData
Data relevant to the discussion created

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id of Discussion | int32 | Id for this discussion | id |
| Discussion title | string | Title for the discussion | title |
| Comments | Array of [DiscussionComment](#discussioncomment) | Comments in this discussion | comments |
| [DiscussionUser](#discussionuser) | object | User who created this discussion | createdBy |

### DiscussionUser
User who created this discussion

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Discussion created by name | string | Name of the user who created this discussion | name |
| Discussion created by email | string | Email of the user who created this discussion | email |

### SmartsheetCollection[GetDiscussionResponse]
A common pattern for requesting collections from smartsheet

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Data | Array of [GetDiscussionResponse](#getdiscussionresponse) | Collection of smartsheet models | data |

### GetDiscussionResponse
Response object for Get Discussions

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id of Discussion | int32 | Unique id of the discussion | id |
| Discussion title | string | Title for the discussion | title |
| [DiscussionUser](#discussionuser) | object | User who created this discussion | createdBy |
| Access level of Discussion | string | Access Level for this discussion | accessLevel |
| Parent type of Discussion | string | Parent type for this discussion | parentType |
| Discussion is read only | boolean | Whether this discussion is read-only | readOnly |
| Last commented at | date-time | Date of the most recent comment | lastCommentedAt |

### RowResponse
Response object for OnRowCreated

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Rows | Array of [RowData](#rowdata) | rows | rows |

### RowData
A row

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id of Row | string | Id for this row | id |
| The id of the sheet | string | The id of the sheet the row was added to | sheetId |
| Url | string | The url for the sheet the row was added to | permalink |
| Time row created | date-time | Date this row was created | createdAt |
| Time row modified | date-time | Date this row was modified | modifiedAt |
| Row number | int32 | Row number | rowNumber |
| Cells | Array of [RowCell](#rowcell) | Cells | cells |
| Row HTML | string | An HTML table representation of the new row | rowHTML |

### RowCell
A cell in a row

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id of column for this cell | string | Column Id | columnId |
| Cell value | string | Cell value | value |
| Cell display value | string | Cell display value | displayValue |

### CreateCommentResponse
Response object for Creating a Comment

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [DiscussionComment](#discussioncomment) | object | A comment on a discussion | result |

### CommentResponse
Response object for Comment

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Comments | Array of [DiscussionComment](#discussioncomment) | Comments in this discussion | comments |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection |  |  seconds |
| Frequency of trigger polls | 1 | 15 seconds |

