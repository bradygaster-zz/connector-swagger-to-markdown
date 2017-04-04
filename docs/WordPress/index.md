<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# WordPress (Preview)

v1.0.20

WordPress is web software you can use to create a beautiful website, blog, or app.


# Actions

## Get site statistics
Get statistics for a specified site

**Operation Id:** SiteStats

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Site Id | string | The site&#x27;s id or domain | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [SiteStatsModel](#sitestatsmodel) | object |  |

___

## Get post
Get post

**Operation Id:** GetPost

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Site Id | string | The site&#x27;s id or domain | true |
| Post Id | string | The post Id. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [PostModel](#postmodel) | object |  |

___

## Create post
Create post

**Operation Id:** CreatePost

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Site ID | string | The site&#x27;s id or domain. | true |
| Title | string | The title of the post | false |
| Content | string | The content of the post in html | false |
| Status | string | The status of the post | false |
| Tags | string | The tags for post | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [PostModel](#postmodel) | object |  |

___

# Triggers

## When a post is created
Triggers a new flow when there is a new post on the logged in user&#x27;s timeline

**Operation Id:** OnTriggerNewPost

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListPostsResponse](#listpostsresponse) | object |  |

___


## Objects

### SiteList
A list of sites

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Sites | Array of [Site](#site) | List of sites | sites |

### Site
List of site items

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Site ID | integer | Site ID | ID |
| Site Name | string | Site Name | name |
| Site Description | string | Site Description | description |
| Site Url | string | Site URL | URL |
| Is Multisite | boolean | Whether the site is a Multisite site or not. Always true for WP.com sites. | is_multisite |
| Post Count | integer | The number of posts the site has | post_count |
| Subscribers Count | integer | The number of subscribers the site has | subscribers_count |
| Language | string | Language | lang |
| Visible | boolean | Site visibility | visible |
| Is Private | boolean | Is site private | is_private |
| Is Single User Site | boolean | Is single user site | single_user_site |
| Is VIP | boolean | Is VIP | is_vip |
| Is Following | boolean | Is Following | is_following |

### SiteModel


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| ID | integer |  | ID |
| Name | string |  | name |
| Description | string |  | description |
| URL | string |  | URL |
| Is Multisite | boolean |  | is_multisite |
| Post Count | integer |  | post_count |
| Is Private | integer |  | subscribers_count |
| Lang | string |  | lang |
| Visible | boolean |  | visible |
| Is Private | boolean |  | is_private |
| Single User Site | boolean |  | single_user_site |
| Is Vip | boolean |  | is_vip |
| Is Following | boolean |  | is_following |

### SiteStatsChartModel


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Period | string |  | period |
| Views | integer |  | views |
| Visitors | integer |  | visitors |
| Likes | integer |  | likes |
| Reblogs | integer |  | reblogs |
| Comments | integer |  | comments |
| Posts | integer |  | posts |

### SiteInsightsModel


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Highest Hour | integer |  | highest_hour |
| Highest Hour Percent | number |  | highest_hour_percent |
| Highest Day Of Week | integer |  | highest_day_of_week |
| Highest Day Percent | number |  | highest_day_percent |

### SiteStatsModel


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Visitors Today | integer |  | visitors_today |
| Visitors_Yesterday | integer |  | visitors_yesterday |
| Visitors | integer |  | visitors |
| View Today | integer |  | views_today |
| Views Yesterday | integer |  | views_yesterday |
| Views Best Day | string |  | views_best_day |
| Views Best Day Total | integer |  | views_best_day_total |
| Views | integer |  | views |
| Comments | integer |  | comments |
| Posts | integer |  | posts |
| Followers Blog | integer |  | followers_blog |
| Followers Comments | integer |  | followers_comments |
| Comments Per Month | integer |  | comments_per_month |
| Comments Most Active Recent Day | string |  | comments_most_active_recent_day |
| Comments Most Active Time | string |  | comments_most_active_time |
| Comments Spam | integer |  | comments_spam |
| Categories | integer |  | categories |
| Tags | integer |  | tags |
| Shares | integer |  | shares |
| Shares Twitter | integer |  | shares_twitter |
| Shares Facebook | integer |  | shares_facebook |
| Shares Press This | integer |  | shares_press-this |

### TopPostModel


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| ID | integer |  | id |
| Link | string |  | href |
| Date | string |  | date |
| Title | string |  | title |
| Type | string |  | type |
| Views | integer |  | views |
| Video Play | boolean |  | video_play |

### ListPostsResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Posts | Array of [PostResponse](#postresponse) | Posts | posts |

### PostResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| ID | integer |  | ID |
| Comment Count | integer |  | comment_count |
| Site ID | integer |  | site_ID |
| Date | string |  | date |
| Modified | string |  | modified |
| Title | string |  | title |
| URL | string |  | URL |
| Slug | string |  | slug |
| Guid | string |  | guid |
| Type | string |  | type |
| Like Count | integer |  | like_count |

### PostsModel


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| ID | integer |  | ID |
| Comment Count | integer |  | comment_count |
| Site ID | integer |  | site_ID |
| Date | string |  | date |
| Modified | string |  | modified |
| Title | string |  | title |
| URL | string |  | URL |
| Slug | string |  | slug |
| Guid | string |  | guid |
| Type | string |  | type |
| Like Count | integer |  | like_count |

### PostModel


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| ID | integer |  | ID |
| Site ID | integer |  | site_ID |
| Date | string |  | date |
| Modified | string |  | modified |
| Title | string |  | title |
| URL | string |  | URL |
| Short URL | string |  | short_URL |
| Content | string |  | content |
| Excerpt | string |  | excerpt |
| Slug | string |  | slug |
| Guid | string |  | guid |
| Status | string |  | status |
| Sticky | boolean |  | sticky |
| Password | string |  | password |
| Parent | boolean |  | parent |
| Type | string |  | type |
| Likes Enabled | boolean |  | likes_enabled |
| Sharing Enabled | boolean |  | sharing_enabled |
| Like Count | integer |  | like_count |
| I Like | boolean |  | i_like |
| Is Rebloggled | boolean |  | is_reblogged |
| Is Following | boolean |  | is_following |
| Global ID | string |  | global_ID |
| Featured Image | string |  | featured_image |
| Post Thumbnail | string |  | post_thumbnail |
| Format | string |  | format |
| Geo | boolean |  | geo |

### CreatePostModel
A Blogger post object for new post requests

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Title | string | The title of the post | title |
| Content | string | The content of the post in html | content |
| Status | string | The status of the post | status |
| Tags | string | The tags for post | tags |

### Error


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| code | int32 |  | code |
| Message | string |  | message |
| Fields | string |  | fields |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 50 | 60 seconds |
| Frequency of trigger polls | 1 | 15 seconds |

