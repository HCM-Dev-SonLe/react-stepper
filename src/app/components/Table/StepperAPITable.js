import React from "react";

const StepperAPITable = () => {
  const styles = {
    wrapper: {
      marginTop: "50px"
    },
    table: {
      borderCollapse: "collapse",
      width: "80%",
      margin: "0 auto",
      textAlign: "left",
      fontSize: "14px"
    },
    row: {
      borderBottom: "1px solid #ddd"
    },
    col: {
      padding: "30px 0"
    }
  };

  const stepperProps = "<Stepper />";
  const stepProps = "<Step />";

  return (
    <div style={styles.wrapper}>
      <h1>{stepperProps} props table</h1>
      <table style={styles.table}>
        <tr style={styles.row}>
          <th style={styles.col}>Property</th>
          <th style={styles.col}>Type</th>
          <th style={styles.col}>Required</th>
          <th style={styles.col}>Default Value</th>
          <th style={styles.col}>Description</th>
        </tr>
        <tr style={styles.row}>
          <td style={styles.col}>children</td>
          <td style={styles.col}>arrayOf</td>
          <td style={styles.col}>true</td>
          <td style={styles.col} />
          <td style={styles.col} />
        </tr>
        <tr style={styles.row}>
          <td style={styles.col}>activeStepKey</td>
          <td style={styles.col}>number</td>
          <td style={styles.col}>true</td>
          <td style={styles.col} />
          <td style={styles.col}>key that mark step is default active</td>
        </tr>
        <tr style={styles.row}>
          <td style={styles.col}>onChange</td>
          <td style={styles.col}>(event, activeKey: number) => void</td>
          <td style={styles.col}>true</td>
          <td style={styles.col} />
          <td style={styles.col}>function call when current step change</td>
        </tr>
        <tr style={styles.row}>
          <td style={styles.col}>direction</td>
          <td style={styles.col}>
            STEPPER_DIRECTION.VERTICAL <br /> STEPPER_DIRECTION.HORIZONTAL
          </td>
          <td style={styles.col}>false</td>
          <td style={styles.col}>STEPPER_DIRECTION.HORIZONTAL</td>
          <td style={styles.col}>stepper direction</td>
        </tr>
      </table>
      <h1>{stepProps} props table</h1>
      <table style={styles.table}>
        <tr style={styles.row}>
          <th style={styles.col}>Property</th>
          <th style={styles.col}>Type</th>
          <th style={styles.col}>Required</th>
          <th style={styles.col}>Default Value</th>
          <th style={styles.col}>Description</th>
        </tr>
        <tr style={styles.row}>
          <td style={styles.col}>activeKey</td>
          <td style={styles.col}>number</td>
          <td style={styles.col}>true</td>
          <td style={styles.col} />
          <td style={styles.col}>key that mark step is active</td>
        </tr>
        <tr style={styles.row}>
          <td style={styles.col}>title</td>
          <td style={styles.col}>string</td>
          <td style={styles.col}>true</td>
          <td style={styles.col} />
          <td style={styles.col}>Title of step</td>
        </tr>
        <tr style={styles.row}>
          <td style={styles.col}>disabled</td>
          <td style={styles.col}>bool</td>
          <td style={styles.col}>false</td>
          <td style={styles.col}>false</td>
          <td style={styles.col}>disabled or not?</td>
        </tr>
      </table>
    </div>
  );
};

export default StepperAPITable;
