import React, { useState } from 'react';
import Form from 'components/Form';
import Input from 'components/Input';
// // import Select from 'components/Select';
// // import Checkbox from 'components/Checkbox';

function FormPage() {
  const [value, setValue] = useState('');
  function formSubmit() {
    console.log(value);
  }
  function onInputChange(e) {
    console.log('before input', e);
    setValue(e);
  }
  return (
    <div className="page">
      <Form>
        <Input type="text" value={value} onChange={onInputChange} />
        <button type="button" onClick={formSubmit}>
          提交
        </button>
      </Form>
    </div>
  );
}

export default FormPage;
