/**
 * Thrown when the client fails to authenticate.
 */
class AuthError extends Error {  
  /**
   * Makes a new error.
   * @param {string} message - The message returned. 
   * @param {string} [type] - The type of error.
   */  
  constructor (message, type) {
    super(message)
    this.name = this.constructor.name
    this.type = type
  }
}

module.exports = AuthError  