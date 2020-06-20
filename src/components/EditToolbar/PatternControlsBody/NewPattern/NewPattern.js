import React from "react";
import { connect } from "react-redux";
import OrientationSelect from "./OrientationSelect/OrientationSelect";
import ComplexitySlider from "./ComplexitySlider/ComplexitySlider";
import TemplateSelect from "./TemplateSelect/TemplateSelect";
import * as actions from "../../../../store/actions/index";

const NewPattern = props => {
  const {
    complexity,
    orientation,
    columns,
    onUpdateComplexity,
    onUpdateOrientation,
    onUpdateTemplate
  } = props;
  return (
    <React.Fragment>
      <TemplateSelect
        complexity={complexity}
        columns={columns}
        orientation={orientation}
        onUpdate={onUpdateTemplate}
      />
      <OrientationSelect
        complexity={complexity}
        orientation={orientation}
        onUpdate={onUpdateOrientation}
      />
      <ComplexitySlider
        complexity={complexity}
        orientation={orientation}
        onUpdate={onUpdateComplexity}
      />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    complexity: state.currentPattern.complexity,
    orientation: state.currentPattern.orientation,
    columns: state.currentPattern.columns
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onUpdateComplexity: (complexity, orientation) =>
      dispatch(actions.updateComplexity(orientation, complexity)),
    onUpdateOrientation: (orientation, complexity) =>
      dispatch(actions.updateOrientation(orientation, complexity)),
    onUpdateTemplate: template => dispatch(actions.newTemplate(template))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPattern);
