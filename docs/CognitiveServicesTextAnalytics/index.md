![Icon](icon.png)

# Text Analytics (Preview)

vv2.0

Microsoft Cognitive Services Text Analytics detects language, sentiment and more of the text you provide.

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| Account Key | Cognitive Services Account Key | securestring |


# Actions

## Key Phrases
Returns a list of strings denoting the key talking points in the input text. Currently, the following languages are supported: English, German, Spanish and Japanese.

**Operation Id:** KeyPhrases

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Text | string | Text to analyze | false |
| Language | string | This is the 2 letter ISO 639-1 representation of a language.
            For example, use &quot;en&quot; for English; &quot;es&quot; for Spanish etc., | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [KeyPhraseResult](#keyphraseresult) | object |  |

___

## Detect Language
Returns the detected language and a numeric score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. A total of 120 languages are supported.

**Operation Id:** DetectLanguage

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Text | string | Text to analyze | false |
| Number of languages | int32 | Number of languages to detect. Set to 1 by default. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [LanguageResult](#languageresult) | object |  |

___

## Detect Sentiment
Returns a numeric score between 0 and 1. Scores close to 1 indicate positive sentiment, while scores close to 0 indicate negative sentiment. Currently, the following languages are supported: English, Spanish, French, Portuguese.

**Operation Id:** DetectSentiment

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Text | string | Text to analyze | false |
| Language | string | This is the 2 letter ISO 639-1 representation of a language.
            For example, use &quot;en&quot; for English; &quot;es&quot; for Spanish etc., | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [SentimentResult](#sentimentresult) | object |  |

___


## Objects

### MultiLanguageInput


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Text | string | Text to analyze | text |
| Language | string | This is the 2 letter ISO 639-1 representation of a language.
            For example, use &quot;en&quot; for English; &quot;es&quot; for Spanish etc., | language |

### KeyPhraseResult


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Key Phrases | array of string | A list of representative words or phrases. The number of key phrases returned is proportional to the number of words in the input document. | keyPhrases |
|  | string |  | keyPhrases |
| Id | string | Unique document identifier. | id |

### ErrorResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| code | string |  | code |
| message | string |  | message |
| target | string |  | target |
| [InternalError](#internalerror) | object |  | innerError |

### InternalError


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| code | string |  | code |
| message | string |  | message |

### LanguageInput


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Text | string | Text to analyze | text |

### LanguageResult


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | Unique document identifier. | id |
|  | Array of [DetectedLanguageV2](#detectedlanguagev2) | A list of extracted languages. | detectedLanguages |

### DetectedLanguageV2


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Name | string | Long name of a detected language (e.g. English, French). | name |
| Language Code | string | A two letter representation of the detected language according to the ISO 639-1 standard (e.g. en, fr). | iso6391Name |
| Score | double | A confidence score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. | score |

### SentimentResult


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Score | double | A decimal number between 0 and 1 denoting the sentiment of the document.  A score above 0.7 usually refers to a positive document while a score below 0.3 normally has a negative connotation. Mid values refer to neutral text. | score |
| Request ID | string | Unique document identifier. | id |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection |  |  seconds |


