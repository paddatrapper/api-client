# libretime_client.ScheduleApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**schedule_create**](ScheduleApi.md#schedule_create) | **POST** /api/v2/schedule/ | 
[**schedule_destroy**](ScheduleApi.md#schedule_destroy) | **DELETE** /api/v2/schedule/{id}/ | 
[**schedule_list**](ScheduleApi.md#schedule_list) | **GET** /api/v2/schedule/ | 
[**schedule_partial_update**](ScheduleApi.md#schedule_partial_update) | **PATCH** /api/v2/schedule/{id}/ | 
[**schedule_retrieve**](ScheduleApi.md#schedule_retrieve) | **GET** /api/v2/schedule/{id}/ | 
[**schedule_update**](ScheduleApi.md#schedule_update) | **PUT** /api/v2/schedule/{id}/ | 


# **schedule_create**
> Schedule schedule_create(schedule)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import schedule_api
from libretime_client.model.schedule import Schedule
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime_client.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = schedule_api.ScheduleApi(api_client)
    schedule = Schedule(
        starts=dateutil_parser('1970-01-01T00:00:00.00Z'),
        file="file_example",
        stream="stream_example",
        clip_length="clip_length_example",
        fade_in="fade_in_example",
        fade_out="fade_out_example",
        cue_in="cue_in_example",
        media_item_played=True,
        instance="instance_example",
        playout_status=-32768,
        broadcasted=-32768,
        position=-2147483648,
    ) # Schedule | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.schedule_create(schedule)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ScheduleApi->schedule_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schedule** | [**Schedule**](Schedule.md)|  |

### Return type

[**Schedule**](Schedule.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schedule_destroy**
> schedule_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import schedule_api
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime_client.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = schedule_api.ScheduleApi(api_client)
    id = 1 # int | A unique integer value identifying this schedule.

    # example passing only required values which don't have defaults set
    try:
        api_instance.schedule_destroy(id)
    except libretime_client.ApiException as e:
        print("Exception when calling ScheduleApi->schedule_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this schedule. |

### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schedule_list**
> [Schedule] schedule_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import schedule_api
from libretime_client.model.schedule import Schedule
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime_client.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = schedule_api.ScheduleApi(api_client)
    broadcasted = 1 # int |  (optional)
    broadcasted__gt = 1 # int |  (optional)
    broadcasted__gte = 1 # int |  (optional)
    broadcasted__lt = 1 # int |  (optional)
    broadcasted__lte = 1 # int |  (optional)
    broadcasted__range = [
        1,
    ] # [int] | Multiple values may be separated by commas. (optional)
    ends = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime |  (optional)
    ends__gt = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime |  (optional)
    ends__gte = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime |  (optional)
    ends__lt = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime |  (optional)
    ends__lte = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime |  (optional)
    ends__range = [
        dateutil_parser('1970-01-01T00:00:00.00Z'),
    ] # [datetime] | Multiple values may be separated by commas. (optional)
    is_valid = True # bool | Filter on valid instances (optional)
    playout_status = 1 # int |  (optional)
    playout_status__gt = 1 # int |  (optional)
    playout_status__gte = 1 # int |  (optional)
    playout_status__lt = 1 # int |  (optional)
    playout_status__lte = 1 # int |  (optional)
    playout_status__range = [
        1,
    ] # [int] | Multiple values may be separated by commas. (optional)
    starts = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime |  (optional)
    starts__gt = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime |  (optional)
    starts__gte = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime |  (optional)
    starts__lt = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime |  (optional)
    starts__lte = dateutil_parser('1970-01-01T00:00:00.00Z') # datetime |  (optional)
    starts__range = [
        dateutil_parser('1970-01-01T00:00:00.00Z'),
    ] # [datetime] | Multiple values may be separated by commas. (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.schedule_list(broadcasted=broadcasted, broadcasted__gt=broadcasted__gt, broadcasted__gte=broadcasted__gte, broadcasted__lt=broadcasted__lt, broadcasted__lte=broadcasted__lte, broadcasted__range=broadcasted__range, ends=ends, ends__gt=ends__gt, ends__gte=ends__gte, ends__lt=ends__lt, ends__lte=ends__lte, ends__range=ends__range, is_valid=is_valid, playout_status=playout_status, playout_status__gt=playout_status__gt, playout_status__gte=playout_status__gte, playout_status__lt=playout_status__lt, playout_status__lte=playout_status__lte, playout_status__range=playout_status__range, starts=starts, starts__gt=starts__gt, starts__gte=starts__gte, starts__lt=starts__lt, starts__lte=starts__lte, starts__range=starts__range)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ScheduleApi->schedule_list: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **broadcasted** | **int**|  | [optional]
 **broadcasted__gt** | **int**|  | [optional]
 **broadcasted__gte** | **int**|  | [optional]
 **broadcasted__lt** | **int**|  | [optional]
 **broadcasted__lte** | **int**|  | [optional]
 **broadcasted__range** | **[int]**| Multiple values may be separated by commas. | [optional]
 **ends** | **datetime**|  | [optional]
 **ends__gt** | **datetime**|  | [optional]
 **ends__gte** | **datetime**|  | [optional]
 **ends__lt** | **datetime**|  | [optional]
 **ends__lte** | **datetime**|  | [optional]
 **ends__range** | **[datetime]**| Multiple values may be separated by commas. | [optional]
 **is_valid** | **bool**| Filter on valid instances | [optional]
 **playout_status** | **int**|  | [optional]
 **playout_status__gt** | **int**|  | [optional]
 **playout_status__gte** | **int**|  | [optional]
 **playout_status__lt** | **int**|  | [optional]
 **playout_status__lte** | **int**|  | [optional]
 **playout_status__range** | **[int]**| Multiple values may be separated by commas. | [optional]
 **starts** | **datetime**|  | [optional]
 **starts__gt** | **datetime**|  | [optional]
 **starts__gte** | **datetime**|  | [optional]
 **starts__lt** | **datetime**|  | [optional]
 **starts__lte** | **datetime**|  | [optional]
 **starts__range** | **[datetime]**| Multiple values may be separated by commas. | [optional]

### Return type

[**[Schedule]**](Schedule.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schedule_partial_update**
> Schedule schedule_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import schedule_api
from libretime_client.model.schedule import Schedule
from libretime_client.model.patched_schedule import PatchedSchedule
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime_client.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = schedule_api.ScheduleApi(api_client)
    id = 1 # int | A unique integer value identifying this schedule.
    patched_schedule = PatchedSchedule(
        starts=dateutil_parser('1970-01-01T00:00:00.00Z'),
        file="file_example",
        stream="stream_example",
        clip_length="clip_length_example",
        fade_in="fade_in_example",
        fade_out="fade_out_example",
        cue_in="cue_in_example",
        media_item_played=True,
        instance="instance_example",
        playout_status=-32768,
        broadcasted=-32768,
        position=-2147483648,
    ) # PatchedSchedule |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.schedule_partial_update(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ScheduleApi->schedule_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.schedule_partial_update(id, patched_schedule=patched_schedule)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ScheduleApi->schedule_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this schedule. |
 **patched_schedule** | [**PatchedSchedule**](PatchedSchedule.md)|  | [optional]

### Return type

[**Schedule**](Schedule.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schedule_retrieve**
> Schedule schedule_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import schedule_api
from libretime_client.model.schedule import Schedule
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime_client.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = schedule_api.ScheduleApi(api_client)
    id = 1 # int | A unique integer value identifying this schedule.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.schedule_retrieve(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ScheduleApi->schedule_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this schedule. |

### Return type

[**Schedule**](Schedule.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **schedule_update**
> Schedule schedule_update(id, schedule)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import schedule_api
from libretime_client.model.schedule import Schedule
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime_client.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = schedule_api.ScheduleApi(api_client)
    id = 1 # int | A unique integer value identifying this schedule.
    schedule = Schedule(
        starts=dateutil_parser('1970-01-01T00:00:00.00Z'),
        file="file_example",
        stream="stream_example",
        clip_length="clip_length_example",
        fade_in="fade_in_example",
        fade_out="fade_out_example",
        cue_in="cue_in_example",
        media_item_played=True,
        instance="instance_example",
        playout_status=-32768,
        broadcasted=-32768,
        position=-2147483648,
    ) # Schedule | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.schedule_update(id, schedule)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ScheduleApi->schedule_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this schedule. |
 **schedule** | [**Schedule**](Schedule.md)|  |

### Return type

[**Schedule**](Schedule.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

