import './mylabel.css'


export interface MyLabelProps {

   /**
   * Text to show
   */
  label: string;
  /**
   * Size of the text
   */
  size: 'normal'|'h1'|'h2'|'h3'
  /**
   * Capitalizar the text
   */
  allCaps?: boolean
     /**
   * Color text
   */
  color?: 'primary'|'secondary'|'tertiary'
}

export const MyLabel = ({ label='No label', size='normal', allCaps=false, color='primary'}:MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`}>
      {
        allCaps?label.toUpperCase():label
      }
    </span>
  )
}
