<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# OneNote (Business) (Preview)

OneNote is a note taking app from Microsoft that makes it easy to sync your ideas, sketches and notes across all your devices! Connect to your Office 365 account with OneDrive for Business enabled to track new sections, create notes and more.


# Actions

## Create page in a section
Create new page in a specified section.

**Operation Id:** CreatePageInSection

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Notebook Key | string | Notebook | true |
| Section Id | string | Section | true |
| Page Content | string | Page content in HTML. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Page](#page) | object |  |

___

## Create a page in Quick Notes
Create a new page in the Quick Notes section.

**Operation Id:** CreatePageInQuickNotes

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Page Content | string | Page content in HTML | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Page](#page) | object |  |

___

# Triggers

## When a new section is created
Triggers a flow when a new section is added to a notebook.

**Operation Id:** OnNewSectionInNotebook

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Notebook Key | string | Notebook | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [NewSectionResponse](#newsectionresponse) | object | Response for a new section |

___

## When a new section group is created
Triggers a flow when a new section group is added to a notebook.

**Operation Id:** OnNewSectionGroupInNotebook

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Notebook Key | string | Notebook | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [NewSectionGroupResponse](#newsectiongroupresponse) | object | Response for a new section group |

___

## When a new page is created in a section
Triggers a flow when a new page is added to a section.

**Operation Id:** OnNewPageInSection

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Notebook Key | string | Notebook | true |
| Section Id | string | Section | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [NewPageResponse](#newpageresponse) | object | Response for a new page |

___


## Objects

### Page


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Title | string | The title of the page. | title |
| [Link](#link) | object | Links | links |
| Content Url | string | A url to the page content. | contentUrl |
| Last Modified Date | date-time | The last modified date of the page. | lastModifiedTime |
| Created Date | date-time | The date the page was created. | createdTime |
| Id | string | The unique identifier of the page. | id |

### Notebook
A Notebook

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| FileName | string |  | FileName |
| Key | string |  | Key |

### ParentNotebook


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Parent Notebook Key | string | The unique identifier of the parent notebook. | id |
| Parent Notebook Name | string | The name of the parent notebook. | name |
| Parent Notebook Url | string | A url link to the parent notebook. | self |

### Link
Links

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [OneNoteClientUrl](#onenoteclienturl) | object | OneNote client url | oneNoteClientUrl |
| [OneNoteWebUrl](#onenoteweburl) | object | OneNote web url | oneNoteWebUrl |

### OneNoteClientUrl
OneNote client url

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| OneNote client url | string | OneNote client url | href |

### OneNoteWebUrl
OneNote web url

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| OneNote web url | string | OneNote web url | href |

### SectionListItem


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Section name | string | The name of the section. | name |
| Section key | string | The key used to reference this section; also a url to the pages. | pagesUrl |

### Section
A section

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Creator | string | The creator of the section. | createdBy |
| Creation Date | date-time | The creation date and time of the section. | createdTime |
| Section Identifier | string | Unique identifier of the section. | id |
| Last Modified By | string | The user who last modified the section. | lastModifiedBy |
| Last Modified Date | date-time | The last modified date and time of the section. | lastModifiedTime |
| Section Name | string | The name of the section. | name |
| Pages Url | string | Url to the pages in this section. | pagesUrl |
| [ParentNotebook](#parentnotebook) | object |  | parentNotebook |
| Url | string | The url to this section. | self |

### SectionGroup
A section group

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Creation date | date-time | The creation date and time of the section group. | createdTime |
| Creator | string | The creator of the section group. | createdBy |
| Identifier | string | Unique identifier of the section group. | id |
| Last modifier | string | The user who last modified the section group. | lastModifiedBy |
| Last modified date | date-time | The last modification date and time of the section group. | lastModifiedTime |
| Name | string | The name of the section group. | name |
| Sections Url | string | Url of the sections within this section group. | sectionsUrl |
| Section Group Url | string | The url to this section group | self |

### NewSectionResponse
Response for a new section

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Sections | Array of [Section](#section) | An array of objects, each representing a specific section | value |

### NewSectionGroupResponse
Response for a new section group

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Section Groups | Array of [SectionGroup](#sectiongroup) | An array of objects, each representing a specific section group | value |

### NewPageResponse
Response for a new page

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Pages | Array of [Page](#page) | An array of objects, each representing a specific page | value |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 30 | 60 seconds |
| Frequency of trigger polls | 1 | 10 seconds |

