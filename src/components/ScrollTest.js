class MyComponent extends React.Component {
    handleScroll = e => {
      let element = e.target
      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        // do something at end of scroll
      }
    }
    render() {
      return (
        <div className="content-container" onScroll={this.handleScroll}>
          // Your content
        </div>
      )
    }
  }