export interface Props {
  x: number;
  y: number;
}

export class Value {
  private value = 10
  private props: Props = { x: 0, y: 0 };

  getValue(): number {
    return this.value;
  }

  setValue(value: number): void {
    this.value = value;
  }

  setProps(props: Props) {
    this.props = props;
  }

  getProps(): Props {
    return this.props;
  }
}

const value = new Value();
value.setValue(1000);
value.getValue();

const value1 = new Value()
value1.setProps({ x: 1000, y: 1000 });
value1.getProps();

