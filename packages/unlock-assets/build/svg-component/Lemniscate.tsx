import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgLemniscate = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.856 10.192c-1.13 0-2.016-.379-2.656-1.136-.629-.757-.944-1.819-.944-3.184 0-1.365.315-2.427.944-3.184.64-.757 1.526-1.136 2.656-1.136 1.131 0 2.011.379 2.64 1.136.64.757.96 1.819.96 3.184 0 1.365-.32 2.427-.96 3.184-.629.757-1.509 1.136-2.64 1.136Zm0-.8c.811 0 1.451-.256 1.92-.768.47-.512.704-1.259.704-2.24V5.36c0-.981-.234-1.728-.704-2.24-.469-.512-1.109-.768-1.92-.768-.81 0-1.45.256-1.92.768-.469.512-.704 1.259-.704 2.24v1.024c0 .981.235 1.728.704 2.24.47.512 1.11.768 1.92.768Z" />
    <path d="M11.25 10.192c-1.13 0-2.016-.379-2.656-1.136-.63-.757-.944-1.819-.944-3.184 0-1.365.315-2.427.944-3.184.64-.757 1.526-1.136 2.656-1.136 1.13 0 2.01.379 2.64 1.136.64.757.96 1.819.96 3.184 0 1.365-.32 2.427-.96 3.184-.63.757-1.51 1.136-2.64 1.136Zm0-.8c.81 0 1.45-.256 1.92-.768s.704-1.259.704-2.24V5.36c0-.981-.235-1.728-.704-2.24-.47-.512-1.11-.768-1.92-.768-.81 0-1.45.256-1.92.768s-.704 1.259-.704 2.24v1.024c0 .981.235 1.728.704 2.24.47.512 1.11.768 1.92.768Z" />
  </svg>
)

export type { SVGRProps }
export default SvgLemniscate