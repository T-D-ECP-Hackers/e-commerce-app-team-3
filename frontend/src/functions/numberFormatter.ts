const formatter = new Intl.NumberFormat('en-UK', {style: 'currency', currency: 'GBP'})

// This function will round any number to two digits
// If you have the number "0.01234" you will get "0.01"
export const formatAsGBP = (num: number) => formatter.format(num)
