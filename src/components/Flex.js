const Flex = ({
  flex = false,
  autoWidth = false,
  alignCenter = false,
  alignEnd = false,
  width = 1440,
  alignStart = false,
  justifyCenter = false,
  justifyEnd = false,
  justifyStart = false,
  justifyBetween = false,
  justifyAround = false,
  colmn = false,
  children = <></>,
  className,
  gap = 0
}) => {
  return (
    <div 
      style={{
        display: flex ? 'flex' : 'block',
        width: autoWidth ? '100%' : width,
        alignItems: alignCenter ? 'center' : alignEnd ? 'flex-end' : alignStart ? 'flex-start' : 'stretch',
        justifyContent: justifyCenter ? 'center' : justifyEnd ? 'flex-end' : justifyStart ? 'flex-start' : 
          justifyBetween ? 'space-between' : justifyAround ? 'space-around' : 'flex-start',
        flexDirection: colmn ? 'column' : 'row',
        gap : gap
      }} className={className}>
      {children}
    </div>    
  );
}

export default Flex;