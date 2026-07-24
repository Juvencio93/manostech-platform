export const layoutLoader = {
  async loadLayout(layoutName) {
    try {
      const response = await fetch(`./layouts/${layoutName}.html`);
      if (!response.ok) throw new Error(`Layout ${layoutName} não encontrado`);
      return await response.text();
    } catch (error) {
      console.error('Erro ao carregar layout:', error);
      return '<p>Erro ao carregar página</p>';
    }
  }
};

export async function loadLayout(layoutName) {
  return layoutLoader.loadLayout(layoutName);
}