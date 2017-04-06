<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# DocuSign (Preview)

DocuSign is the easiest and most secure way to sign and get documents signed. With over 50 million users worldwide, DocuSign is the most widely used eSignature and Digital Transaction Management platform in the world.


# Actions

## Send envelope using template
Send a new envelope using a specified template.

**Operation Id:** SendEnvelope

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account | string | Account id | true |
| Template | string | Template id | true |
| Envelope status | string | Envelope status | true |
| Signers | dynamic | The signers of the document. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [SendEnvelopeResponse](#sendenveloperesponse) | object |  |

___

## Send envelope
Send an existing envelope.

**Operation Id:** SendDraftEnvelope

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account | string | Account id | true |
| Envelope | string | Envelope id | true |

#### Returns
This operation does not return anything.

___

## List recipients
List recipients for a specific envelope.

**Operation Id:** GetRecipientStatus

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account | string | Account id | true |
| Folder | string | Folder id | true |
| Envelope | string | Envelope id | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListRecipientsResponse](#listrecipientsresponse) | object |  |

___

## Add recipient to an envelope
Add recipient to an envelope

**Operation Id:** AddRecipientToEnvelope

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account | string | Account id | true |
| Envelope | string | Envelope id | true |
| Signer Name | string | The name of the recipient. | true |
| Signer Email | string | The email of the recipient. | true |
| Signing Order | string | The signing order of the recipient in the document. | false |
| Role | string | The role of the signer. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListRecipientsResponse](#listrecipientsresponse) | object |  |

___

## Remove recipient from an envelope
Remove recipient from an envelope

**Operation Id:** RemoveRecipientFromEnvelope

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account | string | Account id | true |
| Folder | string | Folder id | true |
| Envelope | string | Envelope id | true |
| Recipient | string | Recipient id | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListRecipientsResponse](#listrecipientsresponse) | object |  |

___

# Triggers

## When an envelope status changes
Triggers a new flow when an envelope status changes.

**Operation Id:** OnEnvelopeStatusChanges

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account | string | Account id | true |
| Envelope status | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [OnEnvelopeStatusChangesResponse](#onenvelopestatuschangesresponse) | object |  |

___


## Objects

### AddRecipientToEnvelopeRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Signer | Array of [SignerRequest](#signerrequest) |  | signers |

### SignerRequest


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Signing Order | string | The signing order of the recipient in the document. | routingOrder |
| Role | string | The role of the signer. | roleName |

### OnEnvelopeStatusChangesResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Envelopes | Array of [Envelope](#envelope) | Envelopes | envelopes |

### Envelope


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Documents URI | string | The URI for the document in DocuSign. | documentsUri |
| Envelope Id | string | The id of the envelope. | envelopeId |
| Envelope URI | string | The URI for the envelope in DocuSign. | envelopeUri |
| Notification URI | string | The URI for the notifications. | notificationUri |
| Recipients URI | string | The URI for the recipients of the envelope in DocuSign. | recipientsUri |
| Status | string | The status of the envelope. | status |
| Status Changed Datetime | string | The datetime the status changed. | statusChangedDateTime |

### SendEnvelopeResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Envelope Id | string | The id of the envelope. | envelopeId |
| Status | string | The status of the envelope. | status |
| Status date time | string | The datetime the status was set. | statusDateTime |
| URI | string | The URI for the envelope in DocuSign. | uri |

### SendDraftEnvelopeResponse


This object has no properties.

### ListRecipientsResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Signers | Array of [Signer](#signer) | Signers | signers |

### Signer


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Signing Order | string | The signing order of the recipient in the document. | routingOrder |
| Role | string | The role of the signer. | roleName |
| Recipient Id | string | The id the recipient. | recipientId |
| Name | string | The name of the recipient. | name |
| Email | string | The email of the recipient. | email |

### GetLoginAccountsResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Login accounts | Array of [LoginAccount](#loginaccount) | Login accounts | loginAccounts |

### LoginAccount


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Name | string | The name of the account.  | name |
| Account Id guid | string | The GUID of the account. | accountIdGuid |

### ListTemplatesResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Envelope templates | Array of [EnvelopeTemplate](#envelopetemplate) | The availalbe envelope templates. | envelopeTemplates |

### EnvelopeTemplate


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Template Id | string | The id of the template. | templateId |
| Name | string | The name of the template. | name |

### ListFoldersResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Folders | Array of [Folder](#folder) | Folders | folders |

### Folder


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Name | string | The name of the folder. | name |
| Folder Id | string | The id of the folder. | folderId |

### ListEnvelopesResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Folder items | Array of [FolderItem](#folderitem) | The envelopes within a folder. | folderItems |

### FolderItem


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Envelope id | string | The id of the envelope. | envelopeId |
| Subject | string | The subject of the envelope. | subject |

### ListDocumentsResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Envelope documents | Array of [EnvelopeDocument](#envelopedocument) | The documents attached to the envelope. | envelopeDocuments |

### EnvelopeDocument


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Document Id | string | The id of the document. | documentId |
| Name | string | The name of the document. | name |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 120 seconds |

