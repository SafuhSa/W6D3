class FollowToggle {
  constructor(el, options) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id') || options.userId;
    this.followState = (this.$el.data('2') || options.followState);
  }
  
  render () {
    if (this.followState === 'unfollowed') {
      this.$el.prop('disabled', false); // Add a property of disabled and set value to false
      this.$el.html('Follow!');
    }
    else if (this.followState === 'followed')
    this.$el.prop('disabled', false);
    this.$el.html('Unfollow!');
  }
}

module.exports = FollowToggle;
