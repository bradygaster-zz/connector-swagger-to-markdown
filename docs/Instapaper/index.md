<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Instapaper (Preview)

v1.0

Instapaper is a tool for saving web pages to read later. You can create reading lists by organizing pages into folders which can then be accessed from any mobile or web client.

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| Instapaper Username | Instapaper Username | string |
| Instapaper Password | Instapaper Password | securestring |


# Actions

## Get all liked bookmarks
Get all liked bookmarks

**Operation Id:** ListBookmarksLiked

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| readFilter | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [BookmarksResponse](#bookmarksresponse) | object | The response model for bookmark searches |

___

## Get all archived bookmarks
Get all archived bookmarks

**Operation Id:** ListBookmarksArchived

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Liked filter (default: all) | string | Whether to filter on the &quot;liked&quot; feature of a bookmark | false |
| Read filter (default: all) | string | Whether to filter on the read progress of a bookmark | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [BookmarksResponse](#bookmarksresponse) | object | The response model for bookmark searches |

___

## Get bookmarks in a folder
Get bookmarks in a folder

**Operation Id:** ListBookmarksInFolder

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Folder | string | The folder id, or &quot;unread&quot; for the home folder | true |
| Liked filter (default: all) | string | Whether to filter on the &quot;liked&quot; feature of a bookmark | false |
| Read filter (default: all) | string | Whether to filter on the read progress of a bookmark | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [BookmarksResponse](#bookmarksresponse) | object | The response model for bookmark searches |

___

## Get folders
Get folders

**Operation Id:** ListFolders

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [FoldersResponse](#foldersresponse) | object | The resposne model for folder searches |

___

## 


**Operation Id:** ListHighlights

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Bookmark Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [HighlighstResponse](#highlighstresponse) | object | The response model for highlights actions |

___

## Unlike a bookmark
Unlike a bookmark

**Operation Id:** UnlikeBookmark

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Bookmark Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [BookmarkResponse](#bookmarkresponse) | object | The response model for bookark actions |

___

## Like a bookmark
Like a bookmark

**Operation Id:** LikeBookmark

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| bookmark_id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [BookmarkResponse](#bookmarkresponse) | object | The response model for bookark actions |

___

## Archive a bookmark
Archive a bookmark

**Operation Id:** ArchiveBookmark

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Bookmark | string | Use an identifier from a previous step | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [BookmarkResponse](#bookmarkresponse) | object | The response model for bookark actions |

___

## Unarchive a bookmark
Unarchive a bookmark

**Operation Id:** UnarchiveBookmark

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Bookmark | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [BookmarkResponse](#bookmarkresponse) | object | The response model for bookark actions |

___

## Delete a bookmark permenantly (warning: can not be undone)
Delete a bookmark permenantly (warning: can not be undone)

**Operation Id:** DeleteBookmark

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Bookmark Id | string |  | true |

#### Returns
This operation does not return anything.

___

## Mark a bookmark read
Mark a bookmark read

**Operation Id:** MarkReadBookmark

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Bookmark Id | string |  | true |

#### Returns
This operation does not return anything.

___

## Mark a bookmark unread
Mark a bookmark unread

**Operation Id:** MarkUnreadBookmark

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Bookmark Id | string |  | true |

#### Returns
This operation does not return anything.

___

## Add a highlight to a bookmark
Add a highlight to a bookmark

**Operation Id:** AddHighlight

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Bookmark Id | string |  | true |
| Text | string | The text to highlight | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [HighlightResponse](#highlightresponse) | object | The response model for highlight actions |

___

## Create a folder
Create a folder

**Operation Id:** CreateFolder

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Name | string | The name of the new folder, must be unique | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [FolderResponse](#folderresponse) | object | The resposne model for folder searches |

___

# Triggers

## When a bookmark is added to a folder
When a bookmark is added to a folder

**Operation Id:** OnBookmarkAdded

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Folder | string | The folder id, or &quot;unread&quot; for the home folder | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [BookmarksResponse](#bookmarksresponse) | object | The response model for bookmark searches |

___

## When a bookmark is removed from a folder
When a bookmark is removed from a folder

**Operation Id:** OnBookmarkRemoved

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Folder | string | The folder id, or &quot;unread&quot; for the home folder | true |

#### Returns
| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | array of int32 |  |  |
|  | int32 |  |  |

___

## When a bookmark is archived
When a bookmark is archived

**Operation Id:** OnBookmarkArchived

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [BookmarksResponse](#bookmarksresponse) | object | The response model for bookmark searches |

___

## When a bookmark is liked
When a bookmark is liked

**Operation Id:** OnBookmarkLiked

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [BookmarksResponse](#bookmarksresponse) | object | The response model for bookmark searches |

___

## When a folder is created
When a folder is created

**Operation Id:** OnFolderCreated

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [FoldersResponse](#foldersresponse) | object | The resposne model for folder searches |

___

## When the read progress of a bookmark is updated
When the read progress of a bookmark is updated

**Operation Id:** OnBookmarkProgressUpdated

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Folder | string | The folder id, or &quot;unread&quot; for the home folder | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [BookmarksResponse](#bookmarksresponse) | object | The response model for bookmark searches |

___

## When a bookmark is marked read
When a bookmark is marked read

**Operation Id:** OnBookmarkProgressRead

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Folder | string | The folder id, or &quot;unread&quot; for the home folder | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [BookmarksResponse](#bookmarksresponse) | object | The response model for bookmark searches |

___

## When a highlight is added to a bookmark
When a highlight is added to a bookmark

**Operation Id:** OnHighlightAdded

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Folder | string | The folder to look a bookmark up in | true |
| Bookmark | string | The bookmark to check for highlights | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [HighlighstResponse](#highlighstresponse) | object | The response model for highlights actions |

___


## Objects

### ReadFilterEnum


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| readFilter | string |  | readFilter |

### BookmarksResponse
The response model for bookmark searches

| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [Bookmark](#bookmark) | A list of bookmarks returned by the action | Bookmarks |

### Bookmark
A user

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Bookmark Id | int32 | Identifier of the bookmark | bookmark_id |
| Title | string | Title of the bookmark | title |
| Description | string |  | description |
| Url | string | The original url of the bookmarked item | url |
| Liked | boolean | Indicates whether the bookmark has been liked or not | starred |
| Creation time | date-time | The time the bookmark was created | time |
| Read progress | double | The percentage of the bookmark that has been read | progress |

### ReadAndLikedFilterEnum


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Liked filter (default: all) | string | Whether to filter on the &quot;liked&quot; feature of a bookmark | likedFilter |
| Read filter (default: all) | string | Whether to filter on the read progress of a bookmark | readFilter |

### FoldersResponse
The resposne model for folder searches

| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [Folder](#folder) | A list of folders returned by the action | Folders |

### Folder
A user

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Folder Id | int32 | Identifier of the folder | folder_id |
| Title | string |  | title |
| Display title | string |  | display_title |
| Sync to mobile | boolean | indicates whether this folder is synced to mobile app | sync_to_mobile |
| Position | int32 | Ordinal position of the folder | position |

### HighlighstResponse
The response model for highlights actions

| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [Highlight](#highlight) | The highlights | Highlights |

### Highlight
A user

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Highlight Id | int32 |  | highlight_id |
| Text | string | The text to highlight | text |
| Position | int32 | Position where to start searching for the text | position |
| Creation time | int32 | Time the highlight was created | time |

### BookmarkResponse
The response model for bookark actions

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Bookmark](#bookmark) | object | A user | Bookmark |

### HighlightResponse
The response model for highlight actions

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Highlight](#highlight) | object | A user | Highlight |

### FolderResponse
The resposne model for folder searches

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Folder](#folder) | object | A user | Folders |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 30 | 60 seconds |


