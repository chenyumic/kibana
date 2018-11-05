/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { EuiSelect } from '@elastic/eui';
import * as React from 'react';
import { pure } from 'recompose';
import styled from 'styled-components';

import { OnRangeSelected } from '../../../events';
import { Range, Ranges } from './ranges';

interface Props {
  selected: Range;
  onRangeSelected: OnRangeSelected;
}

// TODO: Upgrade Eui library and use EuiSuperSelect

const Select = styled(EuiSelect)`
  cursor: pointer;
  width: 100px;
`;

/** Renders a time range picker for the MiniMap (e.g. 1 Day, 1 Week...) */
export const RangePicker = pure<Props>(({ selected, onRangeSelected }) => {
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    onRangeSelected(event.target.value as Range);
  };

  return (
    <Select
      data-test-subj="rangePicker"
      value={selected}
      options={Ranges.map(range => ({
        text: range,
      }))}
      onChange={onChange}
    />
  );
});
