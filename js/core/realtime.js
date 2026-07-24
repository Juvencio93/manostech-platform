export const realtime = {
  // Simulação de conexão realtime
  // Em produção, usar Supabase Realtime ou Socket.io
  
  subscribers: {},
  
  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
    
    // Retornar função de unsubscribe
    return () => {
      this.subscribers[event] = this.subscribers[event].filter(cb => cb !== callback);
    };
  },

  publish(event, data) {
    if (this.subscribers[event]) {
      this.subscribers[event].forEach(callback => {
        callback(data);
      });
    }
  },

  // Escutar mudanças em visitantes
  onVisitanteAdded(callback) {
    return this.subscribe('visitante:added', callback);
  },

  onVisitanteUpdated(callback) {
    return this.subscribe('visitante:updated', callback);
  },

  onVisitanteDeleted(callback) {
    return this.subscribe('visitante:deleted', callback);
  },

  // Escutar mudanças em eventos
  onEventoAdded(callback) {
    return this.subscribe('evento:added', callback);
  },

  onEventoUpdated(callback) {
    return this.subscribe('evento:updated', callback);
  },

  // Escutar mudanças em campanhas
  onCampanhaAdded(callback) {
    return this.subscribe('campanha:added', callback);
  },

  onCampanhaUpdated(callback) {
    return this.subscribe('campanha:updated', callback);
  },

  // Notificações em tempo real
  onNotification(callback) {
    return this.subscribe('notification', callback);
  },

  // Emitir eventos
  emitVisitanteAdded(visitante) {
    this.publish('visitante:added', visitante);
  },

  emitVisitanteUpdated(visitante) {
    this.publish('visitante:updated', visitante);
  },

  emitEventoAdded(evento) {
    this.publish('evento:added', evento);
  },

  emitNotification(notification) {
    this.publish('notification', notification);
  }
};
