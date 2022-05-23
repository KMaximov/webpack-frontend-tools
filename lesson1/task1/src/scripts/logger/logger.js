export const createLogger = name => {
    const logs = [];
    
    return {
        log(message) {
            logs.push(`log - ${name} - ${message}`)
        },
        error(error) {
            logs.push(`error - ${name} - ${error}`)
        },
        getLogs() {
            return logs;
        }
    }
};