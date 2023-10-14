export const resizeMixin = {
    methods: {
        resize(innerWidth, type) {
            if(type === 'xsSmall') {
                if(innerWidth < 650) {
                    return true
                }
            }
            else if(type === 'xs') {
                if(innerWidth < 1024) {
                    return true 
                }
            }
            else if(type === 'sm') {
                if(innerWidth >= 1024 && innerWidth <= 1279) {
                    return true 
                }
            }
            else if(type === 'md') {
                if(innerWidth >= 1280 && innerWidth <= 1365) {
                    return true 
                }
            }
            else if(type === 'lg') {
                if(innerWidth >= 1366 && innerWidth <= 1919) {
                    return true 
                }
            }
            else if(type === 'xl') {
                if(innerWidth > 1919) {
                    return true 
                }
            }
        }
    }
}