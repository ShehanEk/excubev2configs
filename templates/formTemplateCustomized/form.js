const formFields = (props, dirtyFormValues) => {
  const dcMap = [];
  const { dc } = config.uploads;
  const { deficitContribution } = config.templates;
  const { isFieldDisabled, disabledDate, onChangedValue } = props;
  const yesNoOption = [{ title: 'Yes', value: 'yes' }, { title: 'No', value: 'no' }];

  return [
    {
      type: FULL_CONTAINER,
      label: 'Do you want us to model deficit contributions?',
      field: {
        __order: 'a',
        name: 'wantUsToModelDC',
        className: 'form-control',
        component: BUTTON_GROUP,
        options: yesNoOption,
        onChange: onChangedValue(dirtyFormValues['wantUsToModelDC'])
      },
      validations: [required({ message: 'Required' })],
      when: [
          // custom logic
      ]
    }
  ];
};