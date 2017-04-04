<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# WebMerge (Preview)

v1.0.0

Automatically populate templates with data from your favorite cloud apps.  Never copy &amp; paste again!

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| API Key (https://aka.ms/qhhhbd) | The API Key for your WebMerge account. | string |
| API Secret | The API secret for your WebMerge account. | securestring |


# Actions

## Merge Document
This endpoint merges data into a document.

**Operation Id:** MergeDocument

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Pick Document | number | The Document ID to merge. | true |
| The fields to send to WebMerge | dynamic |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [MergedDocument](#mergeddocument) | object |  |

___

## Merge Data Route
This endpoint merges data into a data route.

**Operation Id:** MergeRoute

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Pick Data Route | number | The Data Route ID. | true |
| The fields to send to WebMerge | dynamic |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [MergedRoute](#mergedroute) | object |  |

___


## Objects

### Document


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Document ID | number | Unique identifier representing the specific document. | id |
| Document Key | string | Unique key used to authenticate a document during merge. | key |
| Type | string | The type of document (template type). | type |
| Name | string | The name of the document. | name |
| Output Name | string | The name of the merged document. | output_name |
| Width | string | The page width of the PDF. | size_width |
| Height | string | The page height of the PDF. | size_height |
| Active | number | A 1/0 boolean indicating if the document is active. | active |
| Merge URL | string | The Merge URL for the document. | url |
| Fields | Array of [Field](#field) | The fields inside the document. | fields |

### Route


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Route ID | number | Unique identifier for the data route. | id |
| Route Key | string | Unique key used to authenticate a data route during merge. | key |
| Name | string | The name of the data route. | name |
| Merge URL | string | The Merge URL for the data route. | url |
| Fields | Array of [Field](#field) | The fields inside the data route. | fields |

### Field


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Key | string | Unique identifier for the merge field. | key |
| Name | string | The name of the merge field. | name |

### MergedDocument


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Success Response | number | Will return 1 if the request was a success. | success |
| File Name | string | The name of the merged file. | name |
| Merged Document URL | string | The temporary URL to the merged document. | url |

### MergedRoute


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Success Response | number | Will return 1 if the request was a success. | success |
| Files | Array of [File](#file) | The files from the data route. | files |

### File


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| File Name | string | The name of the file. | name |
| Merged Document URL | string | The temporary URL to the merged document. | url |
| Merged Document ID | string | The ID of the merged document. | document_id |

### Success


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Success Response | number | Will return 1 if the request was a success. | success |

### Error


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Error Response | string | This is the error message that is received. | error |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |


