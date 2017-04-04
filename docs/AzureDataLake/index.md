<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Azure Data Lake (Preview)

v1.0.0

Azure Data Lake Store connector allows you to read and add data to an Azure Data Lake account.


# Actions

## List Files
List files and folders in a Data Lake Store account.

**Operation Id:** ListFiles

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account name | string | Account name for Azure Data Lake. | true |
| Folder path | string | Path of the folder (no leading &#x27;/&#x27;). | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [folderResponse](#folderresponse) | object |  |

___

## Create Folder
Create a folder in a Data Lake Store account.

**Operation Id:** CreateFolder

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account name | string | Account name for Azure Data Lake. | true |
| Folder path | string | Path of the folder to create (no leading &#x27;/&#x27;). | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operationPerformed](#operationperformed) | object |  |

___

## Append File (concurrent)
Concurrent append to a file.

**Operation Id:** AppendFile_Concurrent

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account name | string | Account name for Azure Data Lake. | true |
| Append mode | string | Set to auto-create if path doesn&#x27;t exist. | false |
| File path | string | Path of the file (no leading &#x27;/&#x27;). | true |
| Content | binary | Content of the file | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| Operation message | string |  |

___

## Read File
Read data from a Data Lake Store account.

**Operation Id:** ReadFile

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account name | string | Account name for Azure Data Lake. | true |
| File path | string | Path of the file (no leading &#x27;/&#x27;). | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| File content | binary |  |

___

## Upload File
Upload data into a Data Lake Store account.

**Operation Id:** UploadFile

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account name | string | Account name for Azure Data Lake. | true |
| File path | string | Path of the file (no leading &#x27;/&#x27;). | true |
| Overwrite | boolean | Overwrite if existing file. | false |
| Content | binary | Content of the file | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operationPerformed](#operationperformed) | object |  |

___

## Append File (sequential)
Append to a file serially.

**Operation Id:** AppendFile_Sequential

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account name | string | Account name for Azure Data Lake. | true |
| File path | string | Path of the file (no leading &#x27;/&#x27;). | true |
| Content | binary | Content to append | true |
| Offset | int64 | The optional offset in the stream to begin the append operation. Default is to append at the end of the stream. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operationPerformed](#operationperformed) | object |  |

___

## Delete File
Delete a file from a Data Lake Store account.

**Operation Id:** DeleteFile

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account name | string | Account name for Azure Data Lake. | true |
| File path | string | Path of the file (no leading &#x27;/&#x27;). | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operationPerformed](#operationperformed) | object |  |

___


## Objects

### folderResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [fileStatusArray](#filestatusarray) | array | FileStatus | FileStatuses.FileStatus |

### fileStatusArray
FileStatus

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| File name | string | File or folder name. | pathSuffix |
| Type | string | Type of item (directory or file). | type |
| Block Size | int32 | Block size of folder or file. | blockSize |
| Access Time | int32 | Ticks since item last accessed. | accessTime |
| Modification Time | int32 | Ticks since item last modified. | modificationTime |

### operationPerformed


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Is Successful | boolean | Flag if the last operation was successful. | boolean |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 3600 | 60 seconds |
| Frequency of trigger polls | 1 | 15 seconds |

