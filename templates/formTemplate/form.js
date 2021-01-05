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
        {
          bool: dirtyFormValues['wantUsToModelDC'] === 'yes',
          childComponents: [
            {
              type: FULL_CONTAINER,
              label:
                'Do you want to upload a file of deficit contributions or enter them on screen?',
              iIcon:
                "Please select to enter information 'On Screen' or 'Upload File'. Then proceed accordingly.",
              field: [
                {
                  __order: 'a',
                  name: WANT_US_TO_UPLOAD_DCES,
                  className: 'form-control',
                  component: SELECT_OPTION,
                  options: {
                    defaultValue: 'Select',
                    dataList: [
                      { value: 'Upload File', key: 'uploadFile' },
                      { value: 'On Screen', key: 'onScreen' }
                    ]
                  },
                  validate: [required({ message: 'Required' })]
                },
                {
                  name: `download_${DCFS_ATTACHMENT}`,
                  component: FILE_DOWNLOADER,
                  editable: dirtyFormValues.wantUsToUploadDCES === 'uploadFile',
                  url: deficitContribution,
                  fileName: 'deficit-contributions.csv'
                }
              ],
              when: [
                {
                  bool: dirtyFormValues.wantUsToUploadDCES === 'uploadFile',
                  childComponents: [
                    {
                      type: FULL_CONTAINER,
                      label: 'Upload deficit contribution file',
                      iIcon:
                        'Download the template file above, complete the required data and save as a csv file. Then upload the csv file.',
                      field: {
                        __order: 'b',
                        name: DCFS_ATTACHMENT,
                        className: 'form-control',
                        component: FILE_UPLOADER,
                        options: {
                          accept: '.csv',
                          manual: true,
                          url: dc.generateDC,
                          params: [props.schemeId]
                        },
                        validate: [required({ message: 'Required' })]
                      }
                    }
                  ]
                },
                {
                  bool: dirtyFormValues.wantUsToUploadDCES === 'onScreen',
                  childComponents: [
                    {
                      type: ROW,
                      props: { className: 'input-row' },
                      childComponents: [
                        {
                          type: DIV,
                          props: { className: 'label-wrapper' }
                        }
                      ]
                    },
                    { type: DIV, props: {}, childComponents: dcMap },
                    {
                      type: ADD_MORE_CONTAINER,
                      bool: true,
                      title: 'Add up to 20 deficit contributions and associated payment dates:',
                      name: 'addMore',
                      border: false,
                      repeatTimes: ((dirtyFormValues || {}).addMore || []).length || 1,
                      maxLimit: 20,
                      addMoreButtonText: '+ Add more',
                      // addMoreButtonVisible: true,
                      showRemoveButton: true,
                      completed: isFieldDisabled,
                      addMoreButtonVisible: !isFieldDisabled,
                      repeatingComponent: namePrefix => (
                        <BaseTemplate
                          data={generateFields(namePrefix, isFieldDisabled, disabledDate)}
                          disabled={undefined}
                        />
                      )
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];
};