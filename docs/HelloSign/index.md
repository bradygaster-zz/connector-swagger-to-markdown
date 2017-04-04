<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# HelloSign (Preview)

v1.0.0

HelloSign enables secure electronic signatures that are business-caliber, easy-to-use and legally binding.

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| Admin API Key https://aka.ms/l6zf3z | The API Key of an admin account | string |


# Actions

## Send signature request from template
Create and send a new signature request based off an existing template.

**Operation Id:** CreateRequest

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account type | string |  | false |
| Template id | string |  | true |
| Subject | string |  |  |
| Message | string |  |  |
| Redirect URL | string |  |  |
| Allow Decline | boolean |  |  |
| Signers | dynamic | The signers of the document. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [RequestResponse](#requestresponse) | object |  |

___

## Get signature request
Get a signature request that includes the current status for each signer.

**Operation Id:** GetRequest

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Request Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [RequestResponse](#requestresponse) | object |  |

___

## Cancel signature request
Cancel an existing signature request.

**Operation Id:** CancelRequest

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Request Id | string |  | true |

#### Returns
This operation does not return anything.

___

# Triggers

## When a signature request is created
Triggers when a new signature request is created.

**Operation Id:** OnNewRequest

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [RequestResponseArray](#requestresponsearray) | array |  |

___

## When a signature request is completed
Triggers when a signature request is completed by all parties.

**Operation Id:** OnRequestCompleted

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [RequestResponseArray](#requestresponsearray) | array |  |

___

## When a signature request is declined
Triggers when a signature request is decline.

**Operation Id:** OnRequestDeclined

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [RequestResponseArray](#requestresponsearray) | array |  |

___


## Objects

### RequestResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Request id | string | Unique id of the signature request. | signature_request_id |
| Title | string | Signature request title. | title |
| Subject | string | Subject of the email sent to signers. | subject |
| Message | string | Custom message in the email sent to signers. | message |
| Is complete | boolean | True if the request has been fully executed by all signers. | is_complete |
| Is declined | boolean | True if the request has been declined by a signer. | is_declined |
| Signing Url | string | Url where a signer, after authenticating, can sign the documents. | signing_url |
| Details Url | string | Url where the requester and the signers can view the current status of the request. | details_url |
| Requester email | string | Email address of the initiator of the signature request. | requester_email_address |
| Signatures | array of object |  | signatures |
| Signature Id | string | Unique identifier of the signature. | signatures.signature_id |
| Signer Email | string | Email address of the signer. | signatures.signer_email_address |
| Signer Name | string | Name of the signer. | signatures.signer_name |
| Status Code | string | Current status of the signature. | signatures.status_code |
| Signed Date | date | Date in ISO UTC format (yyyy-MM-ddTHH:mm:ss.fffZ) | signatures.signed_at |
| Last Viewed Date | date | Date in ISO UTC format (yyyy-MM-ddTHH:mm:ss.fffZ) | signatures.last_viewed_at |
| Last Reminded Date | string | Date in ISO UTC format (yyyy-MM-ddTHH:mm:ss.fffZ) | signatures.last_reminded_at |

### RequestResponseArray


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [RequestResponse](#requestresponse) | object |  |  |

### List_templates_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| templates | array of object | templates | templates |
| template_id | string | template_id | templates.template_id |
| title | string | title | templates.title |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 60 seconds |

