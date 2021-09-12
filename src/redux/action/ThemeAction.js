const setMode = (mode) => ({
   type: 'SET_MODE',
   mode
}) 

const setColor = (color) => ({
   type: 'SET_COLOR',
   color
})

const ThemeAction = {
   setColor,
   setMode
}

export default ThemeAction