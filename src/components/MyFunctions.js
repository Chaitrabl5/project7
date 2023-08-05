  const handleClick = (prevState) => {
        this.setState((prevState) => ({
          show: !prevState.show,
        }));
      };
  export { handleClick };