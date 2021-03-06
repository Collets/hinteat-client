import * as Toastr from 'toastr';
import {Severity, AppError} from '../models/errors';

/** Notification helper class. */
export default class Notification {
  /**
   * Throw an error message in interface
   * @param {string} message
   * @param {number} duration
   */
  static error(message, duration) {
    this.callMessage(message, Severity.Error, duration);
  }

  /**
   * Throw an info message in interface
   * @param {string} message
   * @param {number} duration
   */
  static info(message, duration) {
    this.callMessage(message, Severity.Info, duration || 5000);
  }

  /**
   * Throw a warning message in interface
   * @param {string} message
   * @param {number} duration
   */
  static warning(message, duration) {
    this.callMessage(message, Severity.Warning, duration || 5000);
  }

  /**
   * Throw a success message in interface
   * @param {string} message
   * @param {number} duration
   */
  static success(message, duration) {
    this.callMessage(message, Severity.Success, duration || 5000);
  }

  /**
   * Throw a message in interface
   * @param {string} message
   * @param {Severity} severity
   * @param {number} duration
   */
  static callMessage(message, severity, duration) {
    this.message = message;
    this.duration = duration;
    this.severity = severity;

    this.renderMessage();
  }

  /**
   * Render a message in interface
   */
  static renderMessage() {
    let options = {
      timeOut: this.duration || 0,
      progressBar: true,
    };

    if (this.message instanceof AppError)
      this.message = this.message.message;

    switch (this.severity) {
      case Severity.Info:
        Toastr.info(this.message, '', options);
        break;
      case Severity.Warning:
        Toastr.warning(this.message, '', options);
        break;
      case Severity.Error:
        Toastr.error(this.message, '', options);
        break;
      case Severity.Success:
        Toastr.success(this.message, '', options);
        break;
    }
  }
}
