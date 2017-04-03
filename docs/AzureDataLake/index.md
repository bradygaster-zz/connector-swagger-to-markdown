![Icon](icon.png)

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
| body | binary | Content of the file | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operationPerformed](#operationperformed) | object |  |

___

## Append File
Append to a file serially.

**Operation Id:** AppendFile

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
| FileStatus | array of object | FileStatus | FileStatuses.FileStatus |
| Path Suffix | string | File or folder path and name. | FileStatuses.FileStatus.pathSuffix |
| Type | string | Type of item (directory or file). | FileStatuses.FileStatus.type |
| Block Size | int32 | Block size of folder or file. | FileStatuses.FileStatus.blockSize |
| Access Time | int32 | Ticks since item last accessed. | FileStatuses.FileStatus.accessTime |
| Modification Time | int32 | Ticks since item last modified. | FileStatuses.FileStatus.modificationTime |

### operationPerformed


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Is Successful | boolean | Flag if the last operation was successful. | boolean |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 3600 | 60 seconds |


