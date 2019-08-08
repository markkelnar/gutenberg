/**
 * WordPress dependencies
 */
import { CheckboxControl } from '@wordpress/components';

const BaseOption = ( { children, label, isChecked, onChange } ) => (
  <div className="edit-post-options-modal__option">
    <CheckboxControl
      className="edit-post-options-modal__option"
      label={ label }
      checked={ isChecked }
      onChange={ onChange }
    />
    { children }
  </div>
);

export default BaseOption;
