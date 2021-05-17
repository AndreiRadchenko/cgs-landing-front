export default function clipString(string: string | undefined) {
  return string && string.split(' ').length > 25
    ? [...string.split(' ').slice(0, 24), '...'].join(' ')
    : string;
}
