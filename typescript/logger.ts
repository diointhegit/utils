export class Logger {
  // Códigos ANSI para o Terminal
  private static readonly colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    
    // Cores de fundo (Background)
    bgSuccess: "\x1b[42m",
    bgError: "\x1b[41m",
    bgInfo: "\x1b[46m",
    bgWarn: "\x1b[43m",
    bgDebug: "\x1b[100m",
    
    // Cores de texto (Foreground)
    fgWhite: "\x1b[37m",
    fgBlack: "\x1b[30m",
    fgGray: "\x1b[90m",
    fgRed: "\x1b[31m"
  };

  private static getTime(): string {
    return new Date().toLocaleTimeString('pt-BR', { hour12: false });
  }

  // Helper para formatar a tag: [COR_FUNDO][TEXTO][RESET]
  private static formatTag(label: string, color: string): string {
    return `${color}${this.colors.fgWhite}${this.colors.bright} ${label} ${this.colors.reset}`;
  }

  public static success(message: string, ...args: any[]): void {
    const tag = this.formatTag("SUCCESS", this.colors.bgSuccess);
    const time = `${this.colors.fgGray}[${this.getTime()}]${this.colors.reset}`;
    console.log(`${tag} ${time} ${message}`, ...args);
  }

  public static error(message: string, ...args: any[]): void {
    const tag = this.formatTag("ERROR  ", this.colors.bgError);
    const time = `${this.colors.fgGray}[${this.getTime()}]${this.colors.reset}`;
    // Mensagem de erro em vermelho para destacar
    console.log(`${tag} ${time} ${this.colors.fgRed}${message}${this.colors.reset}`, ...args);
  }

  public static info(message: string, ...args: any[]): void {
    const tag = this.formatTag("INFO   ", this.colors.bgInfo);
    const time = `${this.colors.fgGray}[${this.getTime()}]${this.colors.reset}`;
    console.log(`${tag} ${time} ${message}`, ...args);
  }

  public static warn(message: string, ...args: any[]): void {
    const tag = this.formatTag("WARNING", this.colors.bgWarn);
    const time = `${this.colors.fgGray}[${this.getTime()}]${this.colors.reset}`;
    console.log(`${tag} ${this.colors.fgBlack}${time} ${message}`, ...args);
  }
}
