# react-native-form-api

A form lib that uses [React Context API](https://reactjs.org/docs/context.html) to access children's values and generate an object with key and values.

Using this approach you don't need to keep field's value on you component's state or tracking then on redux store. Each form component has it's own state and validation.

# Table of Contents

- ### [Instaling](#section-instaling)
- ### [Usage](#section-usage)
- ### [Docs](#section-docs)
  - ### [Form](#section-form)
  - ### [BaseControl](#section-base-control)
  - ### [Label](#section-label)
  - ### [Dropdown](#section-dropdown)
  - ### [BaseInput](#section-base-input)
  - ### [AgeInput](#section-age-input)
  - ### [CpfInput](#section-cpf-input)
  - ### [DateInput](#section-date-input)
  - ### [EmailInput](#section-email-input)
  - ### [InputButton](#section-input-button)
  - ### [PasswordInput](#section-password-input)
  - ### [PhoneInput](#section-phone-input)
  - ### [TextInput](#section-text-input)
  - ### [ZipcodeInput](#section-zipcode-input)

# <a name="section-instaling"> Installing </a>

# <a name="section-usage"> Usage </a>

```js
import React, { Component } from 'react';
import { Button, View } from 'react-native';
// Importing form component.
import { Form, FormTextInput } from 'react-native-form-api';

class Page extends Component {
  /**
   * Handle the submit form event.
   * It'll create an object with field's values.
   */
  onSubmitForm = () => {
    // Call the 'submit' event from form, it'll create a object { [key]: value } with form's values.
    const values = this.form.submit();
    /**
     * In this example, the values object will be:
     * {
     *  'nameInput': '',
     * }
     */
    console.log(value);
  };

  render() {
    return (
      <View>
        <Form ref={c => (this.form = c)}>
          <FormTextInput label={'Enter your name'} name={'nameInput'} />
        </Form>
        <Button title="Submit" color="#841584" onPress={this.onSubmitForm} />
      </View>
    );
  }
}

export default Page;
```

# <a name="section-docs"> Docs </a>

## <a name="section-form"> Form </a>

### Description

A container component that handles submit event and (soon) field's validation.

### Props

| Name     | Type | Default value | Description                                                                                                                  |
| -------- | ---- | ------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| onSubmit | func | -             | Event triggered after `submit` is called. <br/> Form will call `onSubmit` method passing an object with values as parameter. |

### Methods

| Name   | Params | Return                                                                             | Description                      |
| ------ | ------ | ---------------------------------------------------------------------------------- | -------------------------------- |
| submit | -      | A object with control's values.<br/>Example: { inputName: 'current fields value' } | Get values from form's controls. |

### Usage example

```js
  ...
  handleSubmit = () => {
    this.form.submit();
  }

  ...

  <Form
    onSubmit={(values) => { console.log(values) }}
    ref={component => { this.form = component }}
  />
  ...
```

## <a name="section-base-control"> BaseControl </a>

### Description

### Props

| Name | Type | Default value | Description |
| ---- | ---- | ------------- | ----------- |
| -    | -    | -             | -           |

### Methods

| Name | Params | Return | Description |
| ---- | ------ | ------ | ----------- |
| -    | -      | -      | -           |

### Usage example

```js
```

## <a name="section-label"> Label </a>

### Description

### Props

| Name | Type | Default value | Description |
| ---- | ---- | ------------- | ----------- |
| -    | -    | -             | -           |

### Methods

| Name | Params | Return | Description |
| ---- | ------ | ------ | ----------- |
| -    | -      | -      | -           |

### Usage example

```js
```

## <a name="section-dropdown"> Dropdown </a>

### Description

### Props

| Name | Type | Default value | Description |
| ---- | ---- | ------------- | ----------- |
| -    | -    | -             | -           |

### Methods

| Name | Params | Return | Description |
| ---- | ------ | ------ | ----------- |
| -    | -      | -      | -           |

### Usage example

```js
```

## <a name="section-base-input"> BaseInput </a>

### Description

### Props

| Name | Type | Default value | Description |
| ---- | ---- | ------------- | ----------- |
| -    | -    | -             | -           |

### Methods

| Name | Params | Return | Description |
| ---- | ------ | ------ | ----------- |
| -    | -      | -      | -           |

### Usage example

```js
```

## <a name="section-age-input"> AgeInput </a>

### Description

### Props

| Name | Type | Default value | Description |
| ---- | ---- | ------------- | ----------- |
| -    | -    | -             | -           |

### Methods

| Name | Params | Return | Description |
| ---- | ------ | ------ | ----------- |
| -    | -      | -      | -           |

### Usage example

```js
```

## <a name="section-cpf-input"> CpfInput </a>

### Description

### Props

| Name | Type | Default value | Description |
| ---- | ---- | ------------- | ----------- |
| -    | -    | -             | -           |

### Methods

| Name | Params | Return | Description |
| ---- | ------ | ------ | ----------- |
| -    | -      | -      | -           |

### Usage example

```js
```

## <a name="section-date-input"> DateInput </a>

### Description

### Props

| Name | Type | Default value | Description |
| ---- | ---- | ------------- | ----------- |
| -    | -    | -             | -           |

### Methods

| Name | Params | Return | Description |
| ---- | ------ | ------ | ----------- |
| -    | -      | -      | -           |

### Usage example

```js
```

## <a name="section-email-input"> EmailInput </a>

### Description

### Props

| Name | Type | Default value | Description |
| ---- | ---- | ------------- | ----------- |
| -    | -    | -             | -           |

### Methods

| Name | Params | Return | Description |
| ---- | ------ | ------ | ----------- |
| -    | -      | -      | -           |

### Usage example

```js
```

## <a name="section-input-button"> InputButton </a>

### Description

### Props

| Name | Type | Default value | Description |
| ---- | ---- | ------------- | ----------- |
| -    | -    | -             | -           |

### Methods

| Name | Params | Return | Description |
| ---- | ------ | ------ | ----------- |
| -    | -      | -      | -           |

### Usage example

```js
```

## <a name="section-password-input"> PasswordInput </a>

### Description

### Props

| Name | Type | Default value | Description |
| ---- | ---- | ------------- | ----------- |
| -    | -    | -             | -           |

### Methods

| Name | Params | Return | Description |
| ---- | ------ | ------ | ----------- |
| -    | -      | -      | -           |

### Usage example

```js
```

## <a name="section-phone-input"> PhoneInput </a>

### Description

### Props

| Name | Type | Default value | Description |
| ---- | ---- | ------------- | ----------- |
| -    | -    | -             | -           |

### Methods

| Name | Params | Return | Description |
| ---- | ------ | ------ | ----------- |
| -    | -      | -      | -           |

### Usage example

```js
```

## <a name="section-text-input"> TextInput </a>

### Description

### Props

| Name | Type | Default value | Description |
| ---- | ---- | ------------- | ----------- |
| -    | -    | -             | -           |

### Methods

| Name | Params | Return | Description |
| ---- | ------ | ------ | ----------- |
| -    | -      | -      | -           |

### Usage example

```js
```

## <a name="section-zipcode-input"> ZipcodeInput </a>

### Description

### Props

| Name | Type | Default value | Description |
| ---- | ---- | ------------- | ----------- |
| -    | -    | -             | -           |

### Methods

| Name | Params | Return | Description |
| ---- | ------ | ------ | ----------- |
| -    | -      | -      | -           |

### Usage example

```js
```
