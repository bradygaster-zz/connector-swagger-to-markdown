<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Microsoft Translator (Preview)

v1.0

Microsoft Translator lets you translate text


# Actions

## Get languages
Retrieves all languages that Microsoft Translator supports

**Operation Id:** Languages

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [Language](#language) |  |

___

## Translate text
Translates text to a specified language using Microsoft Translator

**Operation Id:** Translate

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Text | string | Text to translate | true |
| Target language | string | Target language code (example: &#x27;fr&#x27;) | true |
| Source Language | string | Source language (if not provided, Microsoft Translator will try to auto-detect) (example: en) | false |
| Category | string | Translation category (default: &#x27;general&#x27;) | false |
| Content Type | string | Content type (default: &#x27;text/plain&#x27;) | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| Translated text | string |  |

___

## Detect language
Detects source language of given text

**Operation Id:** Detect

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Text | string | Text to translate | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Language](#language) | object | Language Model for Microsoft Translator translatable languages |

___

## Get speech languages
Retrieves the languages available for speech synthesis

**Operation Id:** SpeechLanguages

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [Language](#language) |  |

___

## Text to speech
Converts a given text into speech as an audio stream in wave format

**Operation Id:** TextToSpeech

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Text | string | Text to translate | true |
| Language Code | string | Language code to generate speech (example: &#x27;en-us&#x27;) | true |
| Format | string | Audio format (default is audio/wav). | false |
| Options | string | Options (default is MinSize). | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| Audio file | binary |  |

___


## Objects

### Language
Language Model for Microsoft Translator translatable languages

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Language code | string | Gets or sets Language code | Code |
| Language name | string | Gets or sets Language name | Name |

## Limits
Connections per account: **1**

| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |


