import './global.css';
import type { Metadata } from 'next';

import { pretendard } from './fonts';

export const metadata = {
  title: 'Welix',
  description: 'Wello design system',
} satisfies Metadata;

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html className={pretendard.className} lang="ko">
      <body>{props.children}</body>
    </html>
  );
}
