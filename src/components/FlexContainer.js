import className from 'classnames'

const FlexContainer = ({ children, ...rest }) => {
  const defaultStyling = 'flex p-4'
  const classes = className(rest.className, defaultStyling)

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  )
}
export default FlexContainer
