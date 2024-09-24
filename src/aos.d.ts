declare module 'aos' {
    interface AosOptions {
      duration?: number;
      delay?: number;
      easing?: string;
      offset?: number;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
      [key: string]: any;
    }
  
    export function init(options?: AosOptions): void;
  }
  