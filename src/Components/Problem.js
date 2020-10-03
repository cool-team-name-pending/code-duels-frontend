import React, { Component } from "react";
import DOMPurify from "dompurify";
import "./Problem.css";
const problemData = {
  statement: {
    htmlStatement:
      '<p>There are $$$n$$$ detachments on the surface, numbered from $$$1$$$ to $$$n$$$, the $$$i$$$-th detachment is placed in a point with coordinates $$$(x_i, y_i)$$$. All detachments are placed in different points.</p>\n<p>Brimstone should visit each detachment at least once. You can choose the detachment where Brimstone starts.</p><p>To move from one detachment to another he should first choose one of four directions of movement (up, right, left or down) and then start moving with the constant speed of one unit interval in a second until he comes to a detachment. After he reaches an arbitrary detachment, he can repeat the same process.</p><p>Each $$$t$$$ seconds an orbital strike covers the whole surface, so at that moment Brimstone should be in a point where some detachment is located. He can stay with any detachment as long as needed.</p><p>Brimstone is a good commander, that\'s why he can create <span class="tex-font-style-bf">at most one</span> detachment and place it in any empty point with integer coordinates he wants before his trip. Keep in mind that Brimstone will need to visit this detachment, too.</p><p>Help Brimstone and find such minimal $$$t$$$ that it is possible to check each detachment. If there is no such $$$t$$$ report about it.</p>',
  },
  input: {
    htmlSpecification:
      "The first line contains a single integer $$$n$$$ $$$(2 \\le n \\le 1000)$$$ â€” the number of detachments.\nIn each of the next $$$n$$$ lines there is a pair of integers $$$x_i$$$, $$$y_i$$$ $$$(|x_i|, |y_i| \\le 10^9)$$$ â€” the coordinates of $$$i$$$-th detachment.\nIt is guaranteed that all points are different.\n",
  },
  output: {
    htmlSpecification:
      "Output such minimal integer $$$t$$$ that it is possible to check all the detachments adding at most one new detachment.\nIf there is no such $$$t$$$, print $$$-1$$$.\n",
  },
  memoryLimit: {
    value: 256,
  },
  timeLimit: {
    value: 2,
  },
  sampleTestCases: [
    {
      input: "4\n100 0\n0 100\n-100 0\n0 -100",
      output: "100",
      htmlExplaination: "",
    },
    {
      input: "7\n0 2\n1 0\n-3 0\n0 -2\n-1 -1\n-1 -3\n-2 -3",
      output: "-1",
      htmlExplaination: "",
    },
    {
      input: "5\n0 0\n0 -1\n3 0\n-2 0\n-2 1",
      output: "2",
      htmlExplaination: "",
    },
    {
      input: "5\n0 0\n2 0\n0 -1\n-2 0\n-2 1",
      output: "2",
      htmlExplaination: "",
    },
  ],
  note: {
    htmlNote:
      "In the first test it is possible to place a detachment in $$$(0, 0)$$$, so that it is possible to check all the detachments for $$$t = 100$$$. It can be proven that it is impossible to check all detachments for $$$t < 100$$$; thus the answer is $$$100$$$.\nIn the second test, there is no such $$$t$$$ that it is possible to check all detachments, even with adding at most one new detachment, so the answer is $$$-1$$$.\nIn the third test, it is possible to place a detachment in $$$(1, 0)$$$, so that Brimstone can check all the detachments for $$$t = 2$$$. It can be proven that it is the minimal such $$$t$$$.\nIn the fourth test, there is no need to add any detachments, because the answer will not get better ($$$t = 2$$$). It can be proven that it is the minimal such $$$t$$$.\n",
  },
};

class Problem extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      problem: {
        statement: "",
        input: "",
        output: "",
        memoryLimit: "",
        timeLimit: "",
        sampleTestCases: "",
        Note: "",
      },
    };
  }
  componentDidMount() {
    const problem = this.fetchProblem();
    this.setState({
      problem,
    });
  }
  fetchProblem() {
    return problemData;
  }
  _renderProblemStatement() {
    return (
      <div>
        <h5 className="red-text">Statement</h5>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              this.state.problem.statement.htmlStatement
            ),
          }}
        ></p>
      </div>
    );
  }
  _renderProblemInput() {
    return (
      <div>
        <h5 className="red-text">Input</h5>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              this.state.problem.input.htmlSpecification
            ),
          }}
        ></p>
      </div>
    );
  }
  _renderProblemOutput() {
    return (
      <div>
        <h5 className="red-text">Output</h5>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              this.state.problem.output.htmlSpecification
            ),
          }}
        ></p>
      </div>
    );
  }
  _renderSampleTestCases() {
    return problemData.sampleTestCases.map((testCase) => {
      return (
        <div className="testcase" key={testCase.input}>
          <div className="testcase-header">Input</div>
          <div
            className="testcase-body"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(testCase.input),
            }}
          ></div>
          <div className="testcase-header">Output</div>
          <div
            className="testcase-body"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(testCase.output),
            }}
          ></div>
        </div>
      );
    });
  }
  _renderNote = () => {
    return (
      <div>
        <div className="red-text">Note</div>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(problemData.note.htmlNote),
          }}
        ></p>
      </div>
    );
  };
  render() {
    return (
      <div className="container problem-container">
        <h3 className="red-text">
          {this.props.problem.index}. {this.props.problem.name}
        </h3>
        {this._renderProblemStatement()}
        {this._renderProblemInput()}
        {this._renderProblemOutput()}
        <h5 className="red-text ">Sample Test Cases</h5>
        {this._renderSampleTestCases()}
        {this._renderNote()}
      </div>
    );
  }
}

export default Problem;
