export const components = {
  Button: {
    baseStyle: { borderRadius: '14px', fontWeight: 700 },
    variants: {
      primary: { bg: 'brand.blue', color: 'white', _hover: { bg: '#17358F', transform: 'translateY(-1px)', boxShadow: '0 14px 30px rgba(30,64,175,.25)' } },
      gold: { bg: 'brand.gold', color: 'brand.navy', _hover: { filter: 'brightness(.95)', transform: 'translateY(-1px)' } },
      outlineBrand: { border: '1px solid', borderColor: 'brand.softGrey', color: 'brand.navy', bg: 'white', _hover: { borderColor: 'brand.blue', color: 'brand.blue' } }
    }
  },
  Card: {
    baseStyle: { container: { borderRadius: '24px', border: '1px solid', borderColor: 'brand.softGrey', boxShadow: '0 18px 45px rgba(15,23,42,.06)' } }
  },
  Badge: {
    variants: {
      sale: { bg: 'blue.50', color: 'brand.blue' },
      rent: { bg: 'green.50', color: 'brand.emerald' },
      gold: { bg: 'yellow.50', color: 'brand.gold' }
    }
  },
  Input: {
    variants: { outline: { field: { borderRadius: '14px', borderColor: 'brand.softGrey', _focus: { borderColor: 'brand.blue', boxShadow: '0 0 0 1px #1E40AF' } } } }
  },
  Select: {
    variants: { outline: { field: { borderRadius: '14px', borderColor: 'brand.softGrey' } } }
  },
  Textarea: {
    variants: { outline: { borderRadius: '14px', borderColor: 'brand.softGrey' } }
  }
};
