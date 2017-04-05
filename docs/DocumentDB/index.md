<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Azure DocumentDB (Preview)

Azure DocumentDB is a NoSQL service for highly available, globally distributed app. Sign into your DocumentDB account to create, update, and query documents and more. 

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| Account ID | Name of the account without &#x27;documents.azure.com&#x27; part | string |
| Access Key to your DocumentDB account | Primary or Secondary Key | securestring |


# Actions

## Get all documents
Get all documents

**Operation Id:** GetDocuments

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Partition key value | string | The partition key value for the requested document or attachment operation. | false |
| Max Item Count | number | An integer indicating the maximum number of items to be returned per page. | false |
| Continuation Token | string | A string token returned for queries and read-feed operations if there are more results to be read. | false |
| Consistency Level | string | This is the consistency level override. The valid values are: Strong, Bounded, Session, or Eventual (in order of strongest to weakest). | false |
| Session Token | string | A string token used with session level consistency. | false |
| Activity id | string | A client supplied identifier for the operation, which will be echoed in the server response. | false |
| Database ID | string | The name of the database | true |
| Collection ID | string | The name of the collection | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [getDocumentsResponse](#getdocumentsresponse) | object |  |

___

## Create or update document
Create or update document

**Operation Id:** CreateDocument

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Partition key value | string | The partition key value for the requested document or attachment operation. | false |
| Max Item Count | number | An integer indicating the maximum number of items to be returned per page. | false |
| Continuation Token | string | A string token returned for queries and read-feed operations if there are more results to be read. | false |
| Consistency Level | string | This is the consistency level override. The valid values are: Strong, Bounded, Session, or Eventual (in order of strongest to weakest). | false |
| Session Token | string | A string token used with session level consistency. | false |
| Activity id | string | A client supplied identifier for the operation, which will be echoed in the server response. | false |
| IsUpsert | boolean | If set to true, the document will be replaced if it exists else created. | false |
| Database ID | string | The name of the database | true |
| Collection ID | string | The name of the collection | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [postDocumentsResponse](#postdocumentsresponse) | object |  |

___

## Query documents
Query documents

**Operation Id:** QueryDocuments

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Partition key value | string | The partition key value for the requested document or attachment operation. | false |
| Max Item Count | number | An integer indicating the maximum number of items to be returned per page. | false |
| Continuation Token | string | A string token returned for queries and read-feed operations if there are more results to be read. | false |
| Enable Cross Partition | boolean | If the collection is partitioned, this must be set to True to allow execution across multiple partitions. | false |
| Consistency Level | string | This is the consistency level override. The valid values are: Strong, Bounded, Session, or Eventual (in order of strongest to weakest). | false |
| Session Token | string | A string token used with session level consistency. | false |
| Activity id | string | A client supplied identifier for the operation, which will be echoed in the server response. | false |
| Database ID | string | The name of the database | true |
| Collection ID | string | The name of the collection | true |
| query | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [queryResponse](#queryresponse) | object |  |

___

## Get a document
Get a document

**Operation Id:** GetDocument

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Partition key value | string | The partition key value for the requested document or attachment operation. | false |
| Max Item Count | number | An integer indicating the maximum number of items to be returned per page. | false |
| Continuation Token | string | A string token returned for queries and read-feed operations if there are more results to be read. | false |
| Consistency Level | string | This is the consistency level override. The valid values are: Strong, Bounded, Session, or Eventual (in order of strongest to weakest). | false |
| Session Token | string | A string token used with session level consistency. | false |
| Activity id | string | A client supplied identifier for the operation, which will be echoed in the server response. | false |
| Database ID | string | The name of the database | true |
| Collection ID | string | The name of the collection | true |
| Document ID | string | The identifier for the document | true |

#### Returns
This operation does not return anything.

___

## Replace a document
Replace a document

**Operation Id:** ReplaceDocument

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Partition key value | string | The partition key value for the requested document or attachment operation. | false |
| Max Item Count | number | An integer indicating the maximum number of items to be returned per page. | false |
| Continuation Token | string | A string token returned for queries and read-feed operations if there are more results to be read. | false |
| Consistency Level | string | This is the consistency level override. The valid values are: Strong, Bounded, Session, or Eventual (in order of strongest to weakest). | false |
| Session Token | string | A string token used with session level consistency. | false |
| Activity id | string | A client supplied identifier for the operation, which will be echoed in the server response. | false |
| Database ID | string | The name of the database | true |
| Collection ID | string | The name of the collection | true |
| Document ID | string | The identifier of the document | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [putDocumentResponse](#putdocumentresponse) | object |  |

___

## Delete a document
Delete a document

**Operation Id:** DeleteDocument

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Partition key value | string | The partition key value for the requested document or attachment operation. | false |
| Max Item Count | number | An integer indicating the maximum number of items to be returned per page. | false |
| Continuation Token | string | A string token returned for queries and read-feed operations if there are more results to be read. | false |
| Consistency Level | string | This is the consistency level override. The valid values are: Strong, Bounded, Session, or Eventual (in order of strongest to weakest). | false |
| Session Token | string | A string token used with session level consistency. | false |
| Activity id | string | A client supplied identifier for the operation, which will be echoed in the server response. | false |
| Database ID | string | The name of the document | true |
| Collection ID | string | The name of the collection | true |
| Document ID | string | The identifier of the document | true |

#### Returns
This operation does not return anything.

___


## Objects

### getAccountResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| _self | string |  | _self |
| _rid | string |  | _rid |
| id | string |  | id |

### getDatabasesResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| _rid | string |  | _rid |
| Databases | array of object |  | Databases |
| id | string |  | Databases.id |
| _rid | string |  | Databases._rid |
| _self | string |  | Databases._self |
| _etag | string |  | Databases._etag |
| _colls | string |  | Databases._colls |
| _users | string |  | Databases._users |
| _ts | int32 |  | Databases._ts |
| _count | int32 |  | _count |

### getDatabaseResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| id | string |  | id |
| _rid | string |  | _rid |
| _self | string |  | _self |
| _etag | string |  | _etag |
| _colls | string |  | _colls |
| _users | string |  | _users |
| _ts | int32 |  | _ts |

### getCollectionsResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| _rid | string |  | _rid |
| DocumentCollections | array of object |  | DocumentCollections |
| id | string |  | DocumentCollections.id |
| indexingMode | string |  | DocumentCollections.indexingPolicy.indexingMode |
| automatic | string |  | DocumentCollections.indexingPolicy.automatic |
| includedPaths | array of object |  | DocumentCollections.indexingPolicy.includedPaths |
| path | string |  | DocumentCollections.indexingPolicy.includedPaths.path |
| indexes | array of object |  | DocumentCollections.indexingPolicy.includedPaths.indexes |
| kind | string |  | DocumentCollections.indexingPolicy.includedPaths.indexes.kind |
| dataType | string |  | DocumentCollections.indexingPolicy.includedPaths.indexes.dataType |
| precision | int32 |  | DocumentCollections.indexingPolicy.includedPaths.indexes.precision |
| excludedPaths | array of string |  | DocumentCollections.indexingPolicy.excludedPaths |
|  | string |  | DocumentCollections.indexingPolicy.excludedPaths |
| _rid | string |  | DocumentCollections._rid |
| _ts | int32 |  | DocumentCollections._ts |
| _self | string |  | DocumentCollections._self |
| _etag | string |  | DocumentCollections._etag |
| _docs | string |  | DocumentCollections._docs |
| _sprocs | string |  | DocumentCollections._sprocs |
| _triggers | string |  | DocumentCollections._triggers |
| _udfs | string |  | DocumentCollections._udfs |
| _conflicts | string |  | DocumentCollections._conflicts |
| _count | int32 |  | _count |

### getCollectionResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| id | string |  | id |
| indexingMode | string |  | indexingPolicy.indexingMode |
| automatic | string |  | indexingPolicy.automatic |
| includedPaths | array of object |  | indexingPolicy.includedPaths |
| path | string |  | indexingPolicy.includedPaths.path |
| indexes | array of object |  | indexingPolicy.includedPaths.indexes |
| kind | string |  | indexingPolicy.includedPaths.indexes.kind |
| dataType | string |  | indexingPolicy.includedPaths.indexes.dataType |
| precision | int32 |  | indexingPolicy.includedPaths.indexes.precision |
| excludedPaths | array of string |  | indexingPolicy.excludedPaths |
|  | string |  | indexingPolicy.excludedPaths |
| _rid | string |  | _rid |
| _ts | int32 |  | _ts |
| _self | string |  | _self |
| _etag | string |  | _etag |
| _docs | string |  | _docs |
| _sprocs | string |  | _sprocs |
| _triggers | string |  | _triggers |
| _udfs | string |  | _udfs |
| _conflicts | string |  | _conflicts |

### postDocumentsResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| _rid | string |  | _rid |
| _ts | int32 |  | _ts |
| _self | string |  | _self |
| _etag | string |  | _etag |
| _attachments | string |  | _attachments |
| id | string |  | id |

### putDocumentResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| _rid | string |  | _rid |
| id | string |  | id |

### getDocumentsResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| _rid | string |  | _rid |
| Documents | array of object |  | Documents |

### queryRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| query | string |  | query |

### queryResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| _rid | string |  | _rid |
| _count | number |  | _count |
| Documents | array of object |  | Documents |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 3000 | 60 seconds |


